let copywritePara = document.querySelector('#copywrite')
let lastModP = document.querySelector('#last-mod')

let moddedDate = new Date(document.lastModified)

copywritePara.innerHTML = `&copy; ${moddedDate.getFullYear()} .:|:. Alec Prettyman .:|:. Utah`
lastModP.innerHTML = `Last Updated: ${moddedDate.toLocaleDateString()} ${moddedDate.toLocaleTimeString()}`