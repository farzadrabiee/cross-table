import {addTableToDOM} from "./table";

const mainElement = document.getElementById('main')

const dimension = {row: 5, col: 3}

if (mainElement)
    addTableToDOM(mainElement, dimension)
