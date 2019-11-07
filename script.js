function button(pick, unpickA, unpickB){
  var cPick = Math.floor(Math.random()*3) + 1;
  // var cPick = 4;
  var compP;
  if (cPick == 1){
    compP = 'rock';
  } else if (cPick == 2){
    compP = 'paper';
  } else if (cPick == 3){
    compP = 'scissor';
  }

  document.getElementById('picky').style.innerHTML='YOU CHOOSE';
  document.getElementById(pick).style.backgroundColor='#fafafa';
  document.getElementById(pick).onclick='none';
  document.getElementById(unpickA).style.cssText='opacity: 0; display: none';
  document.getElementById(unpickB).style.cssText=' opacity: 0; display: none';
  document.getElementById('result').style.display='block';
  document.getElementById('resPlace').style.display='none';
  document.getElementById('button').style.display='block';

  console.log('Math shows ' + cPick);
  console.log('Computer choose ' + compP);

  var comp = document.getElementById('comp');
  var juri = document.getElementById('juri');
  if (pick == compP){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'DRAW'
  } else if (pick == 'rock' && compP == 'paper'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER LOSE'
  } else if (pick == 'rock' && compP == 'scissor'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER WIN'
  } else if (pick == 'paper' && compP == 'scissor'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER LOSE'
  } else if (pick == 'paper' && compP == 'rock'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER WIN'
  } else if (pick == 'scissor' && compP == 'rock'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER LOSE'
  } else if (pick == 'scissor' && compP == 'paper'){
    comp.innerHTML = compP.toUpperCase();
    juri.innerHTML = 'PLAYER WIN'
  } else {
    document.getElementById('result').innerHTML = 'Something is wrong in the source-code, computer cant decide what to pick';
    document.getElementById('result').style.color='red';
  }
}

function reload(){
  location.reload();
}
