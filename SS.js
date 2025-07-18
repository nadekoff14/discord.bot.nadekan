const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();



npm install babel-eslint --save-dev  
  
{
    "parser": "babel-eslint",
    // 以下、設定が続く…
}
  
./node_modules/.bin/eslint --ext .js --ext .jsx ./




//SSpostここから

const debugChannelId = "823147753047457822";
const mainChannelId = "637640640624328712";

http.createServer(function(req, res){
  if (req.method == 'POST'){
    var data = "";
    req.on('data', function(chunk){
      data += chunk;
    });
    req.on('end', function(){
      if(!data){
        console.log("No post data");
        res.end();
        return;
      }
      var dataObject = querystring.parse(data);
      console.log("post:" + dataObject.type);
      if(dataObject.type == "wake"){
        console.log("Woke up in post");
        res.end();
        return;
      }

      //ここから
      if(dataObject.type == "announce"){
        let msgChannelId = debugChannelId;
        if(dataObject.debug !== undefined && dataObject.debug == "false"){
          msgChannelId = mainChannelId;
        }
        let emb = {embed: JSON.parse(dataObject.content)};
        sendMsg(msgChannelId, "", emb);
      }
      //ここまで

      res.end();
    });
  }
  else if (req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Discord Bot is active now\n');
  }
}).listen(3000);