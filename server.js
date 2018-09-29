const express = require('express');
const ejs = require('ejs');
const http = require('http');
const bodyParser = require('body-parser');
const container = require('./container');


container.resolve(function(users){

    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen('3000' , function() {
        
         console.log('running local serve at 3000')
        });
        
        ConfigExpress(app);

        const router = require('express-promise-router')();
        users.SetRouting(router);
        
        app.use(router);
    }

    function ConfigExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

    }   
})
