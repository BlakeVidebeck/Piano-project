// The keys and notes variables store the piano keys
const keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'high-c',
 'c-sharp', 'd-sharp', 'f-sharp', 'g-sharp', 'a-sharp'];

const notes = [];


keys.forEach(key => notes.push(document.getElementById(key)));

const keyPlay = () => event.target.style.backgroundColor = 'black';
const keyReturn = () => event.target.style.backgroundColor = ''

//for desktop
 const play = (note) =>{
  note.onmousedown = () => {
    keyPlay();
  }
  note.onmouseup = () =>{
    keyReturn();
  }
} 

//for phone
const touch = (note) =>{
  note.ontouchstart = () => {
    keyPlay();
  }
  note.ontouchend = () =>{
    keyReturn();
  }
}



notes.forEach(touch);
notes.forEach(play);