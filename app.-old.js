const http = require('http');

const server = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    //res.writeHead(200, { 'Content-Type': 'application/csv' });

    //const persona = {
    //    id: 1,
    //    nombre: 'Juan'
    //}

    res.write('Hola Mundo');
    //res.write('1; Jaime\n');
    //res.write('2; Flora\n');
    //res.write('3; Victor\n');
    //res.write('4; David\n');
    //res.write('5; Rosa\n');
    //res.write('6; Doki\n');
    res.end();
});

server.listen(3000);
console.log('Escuchando el puerto 3000');
