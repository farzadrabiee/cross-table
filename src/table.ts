const validateRowCol = (row: any, col: any) => {
    if (!Number(row) || !Number(col))
        return;

    if (row <= 0 || col <= 0)
        return;

    return true;
}
const createTableElement = (row: number, col: number) => {
    const table = document.createElement('DIV');
    let tableContent = `<table>`

    for (let i = 0; i < row; i++) {
        tableContent += `<tr>`
        for (let j = 0; j < col; j++) {
            tableContent += `<td class="text-xl p-1.5 border-4 border-amber-600">[${i}, ${j}]</td>`
        }
        tableContent += `</tr>`
    }

    tableContent += `</table>`
    table.innerHTML = tableContent;

    return table;
}

interface dimension {
    row: any,
    col: any
}

const addTableToDOM = (mainElement: HTMLElement, dimension: dimension) => {
    const {row, col} = dimension
    const is_valid_row_col = validateRowCol(row, col)

    if (!is_valid_row_col)
        return;

    const table = createTableElement(row, col)

    mainElement.appendChild(table)
}

export {addTableToDOM};
