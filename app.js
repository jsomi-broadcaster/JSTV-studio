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
    alert('Allow Camera + Mic first. Go to Permissions page.');
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
  alert('Mode: ' + m.toUpperCase());
}

function setSrc(s, el){
  source = s;
  el.classList.add('on');
  alert('Source: ' + s.toUpperCase());
}

function goLive(){
  alert('READY TO GO LIVE!\nMode: ' + mode + '\nSource: ' + source + '\n\nNow paste Stream Key in Settings to go to YouTube/Facebook');
  location.href='settings.html';
}

startCam();
