const fs = require('fs');

const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type','image/apng' );
    res.write('<html>');
    res.write('<head><h1>hello welcome</h1><head>');
  
    res.write(' <img src="C:\Users\vijay\OneDrive\Desktop\WorkSpace\Photo\Dog.png>');
   
    res.write('</html>');
    return res.end()}};

 
    


exports.handler = requestHandler;
exports.someText = 'Some hard coded text';