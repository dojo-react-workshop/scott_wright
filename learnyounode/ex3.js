const fs = require('fs')
let file = process.argv[2]
let data = fs.readFileSync(file,"utf8")
let count = 0;

for (let i = 0; i<data.length; i++){
    if(data.charAt(i)=='\n')
        count++
}
console.log(count)