// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 
'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 
'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];

const notes = [];


keys.forEach(key => notes.push(document.getElementById(key)));

const keyPlay = () => event.target.style.backgroundColor = 'black';

const keyReturn = () => event.target.style.backgroundColor = ''

const play = (note) =>{
  note.onmousedown = () => {
    keyPlay();
  }
  note.onmouseup = () =>{
    keyReturn();
  }
}

notes.forEach(play);