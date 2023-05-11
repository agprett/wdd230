let copywritePara = document.querySelector('#copywrite')

let moddedDate = new Date(document.lastModified)

copywritePara.innerHTML = `&copy; ${moddedDate.getFullYear()} | Alec Prettyman | Last Updated: ${moddedDate.toLocaleDateString()} ${moddedDate.toLocaleTimeString()}`