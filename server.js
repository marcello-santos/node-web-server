const express = require('express');
//o express pede para adicionar a seguinte linha:
const app = express();

const hbs = require('hbs');


//um pedido (que chegou ao servidor do cliente) e a resposta (do servidor para o cliente)
app.get('/', (request, response) => {
    //response.send('<h1>Hello from express</h1>');

    response.render('welcome.hbs',{
        title:"Welcome to my site!",
        text:"or not!...."
    }); 
})

//a porta de entrada de id do pc deve ser acima de 1024
app.listen(3000)

//enviar o ficheiro estático help.html
app.use(express.static(__dirname + '/public'));

//por cada get que colocamos, estamos a registrar uma nova rota
app.get('/about', (request, response) => {
    //http://localhost:3000/about
    //response.send('<h1>About</h1>');

    //também podemos enviar JSONs através do express:
    response.send({
        name: 'bruno', //uma string
        likes:['teaching','reading','hiking'] //um array
    });
})

//quando for a pasta carochao, ele vai me dar a data e as horas
app.get('/carochao', (request, response)=>{
    var date = new Date().toString(); //passa o método Date para string
    //var html = `<body><h1>${date}</h1></body>`;

    //em vez de fazermos o send, fazemos o render
    response.render('carochao.hbs',{
        text:date
    });
});

