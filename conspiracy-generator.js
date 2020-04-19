const fs = require("fs")

//this is going to be our directory
const dir = "conspiracies"

//this is going to make a directory on our local file system
fs.mkdirSync(dir)

for (let i = 0; i <= 100; i++) {
    //creates new file
    fs.writeFileSync(`${dir}/${i}.txt`, `Epstien didn't kill himself.`)
}