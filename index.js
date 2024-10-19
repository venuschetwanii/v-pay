const Express = require('express');
const Qrcode = require('qrcode');

let app = Express();

app.get('/',(req,res)=>{
    res.sendFile('G:/payV/home.html');
})


app.get('/api/pay',(req,res)=>{
   
    let amt= req.query.amt
    Qrcode.toDataURL(`upi://pay?pa=jaynil@jio&pn=THAKKAR JAYNIL MAHESHKUMAR&tn=payment&am=${amt}`, function (err, url) {
        if (err) throw err;
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>payment</title>
    </head>
  
      
  
    <style>
      @import url(//fonts.googleapis.com/css?family=VT323);
html {
  background: #222;
}
div{
        
        display:flex;
    }
    
body {
  color: #14fdce;
  font-family: 'VT323';
  font-size: 24px;
  -webkit-font-smoothing: none;
  line-height: 1.2;
  height: 90vh;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  
}
.frame {
  width: 100vW;
  height: 100vH;
  max-width: 100vW;
  max-height: 100vH;
  min-width: 100vW;
  min-height: 100vH;
  
  display: flex;
  align-items: center;
  justify-content: center;
}
.output {
  animation: crt-output 10ms infinite;
  padding: 3rem 2rem;
  pointer-events: auto;
  z-index: -1;
  flex: 1;
}
@keyframes crt-output {
  0% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
}
.scanlines {
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(255,255,255,0),
    rgba(255,255,255,0) 50%,
    rgba(0,0,0,0.3) 70%,
    rgba(255,255,255,0.75)
  );
  background-size: 0.5rem 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
}
.scanlines::before {
  background: rgba(129, 243, 253, 0.75);
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h1, h2, h3 {
  text-align: center;
  font-weight: 200;
  text-transform: uppercase;
}
h1 span {
  animation: crt-blink 1s infinite;
}
@keyframes crt-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

h1 {
  color: rgba(129, 243, 253, 1);
  text-shadow: 0rem 0.1rem 1rem rgba(129, 243, 253, 0.75);
  letter-spacing: 0.1em;
  font-size: 4em;
}
h1::selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h1::-moz-selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h1 span::selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h1 span::-moz-selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}

h2 {
  color: rgba(239, 253, 255, 1);
  text-shadow: 0rem 0.1rem 1rem rgba(239, 253, 255, 0.95);
  letter-spacing: 0.0em;
  font-size: 2em;
}
h2::selection {
  color: #111;
  background: rgba(239, 253, 255, 1);
}
h2::-moz-selection {
  color: #111;
  background: rgba(239, 253, 255, 1);
}

h3 {
  color: rgba(129, 243, 253, 1);
  text-shadow: 0rem 0.1rem 0.5rem rgba(129, 243, 253, 1);
  letter-spacing: -0.01em;
  font-size: 0.75em;
  opacity: 0.75;
  display:flex;
            display: inline;
}
h3::selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h3::-moz-selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h3 small::selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
h3 small::-moz-selection {
  color: #fff;
  background: rgba(129, 243, 253, 1);
}
img{
    display:flex;
    flex-direction: column;
}
    </style>
    <body>
    
        <button><a href="/">Home</a></button>
    
        <div class="frame" style="flex-direction: column">
            <div class="output">
              <h1>scan & Qrcode<span>_</span></h1></div>
              <div style="display:flex;flex-direction:column"><img src=${url} alt="loading">
              </div>
            <div class="scanlines" style="flex-direction: column"></div>
            <h2>Amount:₹${amt}</h2>
            
          </div>
          
          <div><h3>[by Venus]<br/><small>Together let's make change</small></h3></div>
        </body>
    </html>`);
});
})

let portNumber = process.env.PORT || 3000;
app.listen(portNumber,()=>{console.log("on port 3000")});