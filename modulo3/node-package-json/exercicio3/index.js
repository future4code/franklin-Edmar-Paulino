const fs = require("fs");

if (process.argv.length !== 3) {
    console.log(`\x1b[31mEsperava 1 parâmetros, mas recebi ${process.argv.length - 2}.\x1b[0m`);
} else {
    const toDo = process.argv[2];
    fs.open("./toDoDataBase.txt", "a+", (err, fd) => {
        if (err) {
            console.log(err);
        } else {
            fs.appendFile(fd, `${toDo}\n`, (err) => {
                if (err) {
                    console.log(err);
                    fs.close(fd);
                } else {
                    let buffer = new Buffer.alloc(1024);
                    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
                        if (err) {
                            console.log(err);
                        } else if (bytes > 0) {
                            const bufferStringfied = buffer.slice(0, bytes).toString();
                            const toDoList = bufferStringfied.split("\n");
                            toDoList.pop();
                            console.table(toDoList);
                        } else {
                            console.log("Lista de tarefas vazia.");
                        }
                        fs.close(fd);
                    });
                }
            });
        }
    });
}