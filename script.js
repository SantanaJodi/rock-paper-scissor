var pPick;

function rock(){
  var rdoc = document.getElementById('rock')
  rdoc.style.backgroundColor='#fafafa';
  document.getElementById('paper').style.display='none';
  document.getElementById('scissor').style.display='none';
  pPick = 1;
}

function paper(){
  var rdoc = document.getElementById('paper')
  rdoc.style.backgroundColor='#fafafa';
  document.getElementById('rock').style.display='none';
  document.getElementById('scissor').style.display='none';
  pPick = 2;
}

function scissor(){
  var rdoc = document.getElementById('scissor')
  rdoc.style.backgroundColor='#fafafa';
  document.getElementById('rock').style.display='none';
  document.getElementById('paper').style.display='none';
  pPick = 3;
}
