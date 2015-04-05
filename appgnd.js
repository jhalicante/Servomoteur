var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    five = require("johnny-five");

app.disable('x-powered-by');

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "http://"+req.headers.host+':8000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }
);
app.use("/", express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

server.listen(3000, "127.0.0.1");

five.Board().on("ready", function() {

  myServo = new five.Servo(9);

board.repl.inject({
    servo: myServo
  });

  
  myServo.sweep();


  io.on('connection', function (socket) {

    socket.on("changeAngular",function(ang){
        myServo.go(ang);
		myServo.stop();
        socket.emit('retorno', ang);
    });

  });
});


