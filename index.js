var net = parseInt(document.getElementById('net').innerHTML);

var snum = parseInt(document.getElementById('snum').innerHTML);
var sx = parseInt(document.getElementById('sx').innerHTML);



var mnum = parseInt(document.getElementById('mnum').innerHTML);
var mx = parseInt(document.getElementById('mx').innerHTML);

var fnum = parseInt(document.getElementById('fnum').innerHTML);
var fx = parseInt(document.getElementById('fx').innerHTML);

var rnum = parseInt(document.getElementById('rnum').innerHTML);
var rx = parseInt(document.getElementById('rx').innerHTML);

var monum = parseInt(document.getElementById('monum').innerHTML);
var mox = parseInt(document.getElementById('mox').innerHTML);

var bnum = parseInt(document.getElementById('bnum').innerHTML);
var bx = parseInt(document.getElementById('bx').innerHTML);

var inum = parseInt(document.getElementById('inum').innerHTML);
var ix = parseInt(document.getElementById('ix').innerHTML);

var wnum = parseInt(document.getElementById('wnum').innerHTML);
var wx = parseInt(document.getElementById('wx').innerHTML);

var fenum = parseInt(document.getElementById('fenum').innerHTML);
var fex = parseInt(document.getElementById('fex').innerHTML);


//model-s-s

function sminus(){
  if (snum <= 0){
    snum==0;
  }
  else{
    snum = snum - 1;
    net = net + sx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('snum').innerHTML = snum;
}

function splus(){
  snum = snum + 1;
  net = net - sx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('snum').innerHTML = snum;
}

//mars-land-m

function mminus(){
  if (mnum <= 0){
    mnum==0;
  }
  else{
    mnum = mnum - 1;
    net = net + mx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('mnum').innerHTML = mnum;
}

function mplus(){
  mnum = mnum + 1;
  net = net - mx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('mnum').innerHTML = mnum;
}

//falcon-heavy-f

function fminus(){
  if (fnum <= 0){
    fnum==0;
  }
  else{
    fnum = fnum - 1;
    net = net + fx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('fnum').innerHTML = fnum;
}

function fplus(){
  fnum = fnum + 1;
  net = net - fx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('fnum').innerHTML = fnum;
}

//roadster-r

function rminus(){
  if (rnum <= 0){
    rnum==0;
  }
  else{
    rnum = rnum - 1;
    net = net + rx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('rnum').innerHTML = rnum;
}

function rplus(){
  rnum = rnum + 1;
  net = net - rx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('rnum').innerHTML = rnum;
}


//moon-mo

function mominus(){
  if (monum <= 0){
    monum==0;
  }
  else{
    monum = monum - 1;
    net = net + mox;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('monum').innerHTML = monum;
}

function moplus(){
  monum = monum + 1;
  net = net - mox;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('monum').innerHTML = monum;
}


//burj-b

function bminus(){
  if (bnum <= 0){
    bnum==0;
  }
  else{
    bnum = bnum - 1;
    net = net + bx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('bnum').innerHTML = bnum;
}

function bplus(){
  bnum = bnum + 1;
  net = net - bx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('bnum').innerHTML = bnum;
}


//iphone-i

function iminus(){
  if (inum <= 0){
    inum==0;
  }
  else{
    inum = inum - 1;
    net = net + ix;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('inum').innerHTML = inum;
}

function iplus(){
  inum = inum + 1;
  net = net - ix;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('inum').innerHTML = inum;
}


//world-w

function wminus(){
  if (wnum <= 0){
    wnum==0;
  }
  else{
    wnum = wnum - 1;
    net = net + wx;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('wnum').innerHTML = wnum;
}

function wplus(){
  wnum = wnum + 1;
  net = net - wx;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('wnum').innerHTML = wnum;
}

//ferrari-fe

function feminus(){
  if (fenum <= 0){
    fenum==0;
  }
  else{
    fenum = fenum - 1;
    net = net + fex;
    console.log(net);
  }
  document.getElementById('net').innerHTML = net;
  document.getElementById('fenum').innerHTML = fenum;
}

function feplus(){
  fenum = fenum + 1;
  net = net - fex;
  console.log(net);
  document.getElementById('net').innerHTML = net;
  document.getElementById('fenum').innerHTML = fenum;
}




