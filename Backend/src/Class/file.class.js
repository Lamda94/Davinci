const lineByLine  = require('n-readlines');


module.exports = class File {
    constructor(filename){
        this.data = [];
        this.name = filename;
    }

    readData(){
        var d;
        let path = __dirname.replace('Class', 'temp\\');
        path += this.name;
        const liner = new lineByLine(path);
        let line; 
        while (line = liner.next()) {
            this.data.push(line.toString('ascii').replace("\r", ""));
        }
        return this.data;
    }

    processData(separator){
        const tmp = []; 
        this.data.forEach(line => {
            tmp.push(line.split(separator));
        });
        return tmp;
    }
}