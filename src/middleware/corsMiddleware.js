/* const myMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  };

  module.exports = myMiddleware; */

  const myMiddleware = (req, res, next) => 
{   

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    console.log("TIME", Date.now());
    console.log("Middleware läuft");
    next();
};
  
module.exports = myMiddleware;