
// Routers
// expose the routes to our app with module.exports

var nconf = require('/usr/local/lib/node_modules/nconf');
nconf.argv()
       .env()
       .file({ file: '/home/pi/Bailey/server/app/config.json' });
var installPath = nconf.get('server:installPath');


module.exports = function(app) {

var path = require('path'); 

    //app.use(express.static(__dirname + '/wwwroot'));
    // Routers
  

//
//app.use(express.static('/home/pi/Bailey/server/wwwroot/'));
// Routers
{
app.get('/', function(req, res){
  res.sendFile('/home/pi/Bailey/server/wwwroot/index.html');
  res.end;
});


app.get('/d3test', function(req, res) {
  res.sendFile(installPath + 'server/wwwroot/d3test.html');
  res.end;
});

app.get('/d3', function(req, res) {
  res.sendFile(installPath + 'server/wwwroot/D3.html');
  res.end;
});

app.get('/livedata', function(req, res) {
  res.sendFile(installPath + 'server/wwwroot/livedata.html');
  res.end;
});

app.get('/test', function(req, res) {
  res.sendFile('/home/pi/Bailey/server/wwwroot/test.html');
  res.end;
});

app.get('/vj', function(req, res) {
  res.sendFile(installPath + 'server/wwwroot/robotj.html');
  res.end;
});

app.get('/REBOOT', function(req, res) {
  var postData = req.url;  
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec('sudo reboot now');
  sockets.emit('Info', "Rebooting")
  //console.log(postData);  
  res.end;
});

}

    }