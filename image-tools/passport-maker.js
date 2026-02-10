export function init(){
  const ws = document.getElementById('workspace');
  ws.innerHTML = `
    <h2>Passport Photo A4 Maker</h2>
    <p>Upload one photo — get full A4 sheet ready for print.</p>
    <input type="file" id="pic" accept="image/*">
    <button id="goBtn">Create A4 Sheet</button>
    <canvas id="a4" width="2480" height="3508"></canvas>
  `;

  document.getElementById('goBtn').onclick = makeA4;
}

async function makeA4(){
  const file = document.getElementById('pic').files[0];
  if(!file){ alert('Select a photo first'); return; }

  const img = await loadImage(URL.createObjectURL(file));
  const c = document.getElementById('a4');
  const ctx = c.getContext('2d');

  // A4 white background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0,0,c.width,c.height);

  // Passport size approx 413x531 px at 300 DPI
  const pw = 413;
  const ph = 531;
  const margin = 40;
  const gap = 20;

  let x = margin;
  let y = margin;

  for(let i=0;i<35;i++){
    ctx.drawImage(img, x, y, pw, ph);
    x += pw + gap;
    if(x + pw > c.width - margin){
      x = margin;
      y += ph + gap;
    }
  }
}

function loadImage(src){
  return new Promise(res=>{
    const i = new Image();
    i.onload = ()=>res(i);
    i.src = src;
  });
}
```js
export function init(){
  const ws = document.getElementById('workspace');
  ws.innerHTML = `
    <h2>Passport Photo A4 Maker</h2>
    <input type="file" id="pic">
    <button onclick="makeA4()">Create Sheet</button>
    <canvas id="a4" width="2480" height="3508"></canvas>
  `;
}

window.makeA4 = function(){
  alert('This will place 35 passport photos on A4');
}
