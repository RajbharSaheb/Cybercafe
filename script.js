function openTool(name){
  const box = document.getElementById('workspace');
  box.innerHTML = `<h2>Loading ${name}...</h2>`;

  if(name === 'passport'){
    import('./image-tools/passport-maker.js').then(m=>m.init());
  }
  if(name === 'aadhar-print'){
    import('./cards/aadhar.js').then(m=>m.init());
  }
}
