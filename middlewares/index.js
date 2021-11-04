const checkAuth = function (req, _res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Login realizado, pode continuar");
    next(); // vá para o próximo passo, senão fica num loading infinito
  } else {
    console.log("Faça o login para continuar");
    next();
  }
};

module.exports = checkAuth;
