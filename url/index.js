const url = require('url');
const address = 'https://www.meusite.com.br/catalago?projetos=qrcode';
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('projetos'));
