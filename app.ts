const table = () => {
    const mainElement = document.getElementById('main')

    const elementExist = () => {
        return this.mainElement
    }

    const createTableElement = () => {
        const table = document.createElement('DIV');
        table.innerHTML =
            `
            <table>
            <tr>
                <td>0 , 0</td>
                <td>0 , 1</td>
            </tr>
            <tr>
                <td>1 , 0</td>
                <td>1 , 1</td>
            </tr>
            </table>
            `;

        return table;
    }
    const addTableToDOM = () => {
        if (elementExist())
            return;

        mainElement.appendChild(createTableElement())
    }

    return {
        addTable: addTableToDOM()
    }
}

const t = table();
t.addTable