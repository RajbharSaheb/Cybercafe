export function init(){
  const ws = document.getElementById('workspace');
  ws.innerHTML = `
   <h2>Aadhaar Front-Back Print</h2>
   <input type="file" id="front"> Front Image <br>
   <input type="file" id="back"> Back Image <br>
   <button onclick="printA4()">Print A4 Sheet</button>
  `;
}

window.printA4 = function(){
  alert('Will arrange front-back on A4');
}
