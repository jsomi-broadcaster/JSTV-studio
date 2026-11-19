let stream = null;
let facing = 'user';
let mode = 'live';
let source = 'cam';

async function startCam(){
  try{
    if(stream){ stream.getTracks().forEach(t=>t.stop()); }
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:facing}, audio:true});
    document.getElementById('cam').srcObject = stream;
  }catch(e){
  }
}

function flip(){
  facing = (facing === 'user') ? 'environment' : 'user';
  startCam();
}

function setMode(m, el){
  mode = m;
  document.querySelectorAll('.row a').forEach(a=>a.classList.remove('on'));
  el.classList.add('on');
}

function setSrc(s, el){
  source = s;
  document.querySelectorAll('.row a').forEach(a=>a.classList.remove('on'));
  el.classList.add('on');
}

function goLive(){
  location.href='settings.html';
}

startCam();
