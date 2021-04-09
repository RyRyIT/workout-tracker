const path = require("path");

module.exports = function(app){ 
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"/public/exercise.html"));
  });

  app.get("/index",function(req,res){    
      res.sendFile(path.join(__dirname,"/index.html"));
  });

  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"/public/stats.html"));
  });

}
