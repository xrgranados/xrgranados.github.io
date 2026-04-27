const s = shuffle([
  // ---- cheers
  'Hi',
  'Yo',
  'Ciao',
  'Viva',
  'Salut',
  'Hello',
  'Grüezi',
  'Cheers',
  'Prosit',
  'Oooooh',
  'Olà olà',
  'Bonjour',
  'Namaste',
  'Guten Tag',
  'Shaba-daba',
  'Buona notte',
  'Buenas dias',
  'Hasta la victoria',
  // '“I ♥ ♠ ♦ ♣”',
  'I love my cat',
  'I love my dog',
  'I want to be your slave',
  // ---- thats
  'Life is life',
  'I liked my dinner',
  'Gilgamesh is my father',
  'I don’t want to write you',
  'It’s time for a new haircut',
  'It’s common to say it’s common',
  'Aaaah is not the same as ooooh',
  // ---- colors
  'Blue is my favourite color',
  'Pink is my favourite color',
  'Gray is my favourite color',
  'Ocra is my favourite color',
  // ---- numbers
  'Two has three letters',
  'Three has five letters',
  'Five has four letters',
  'Four has four letters',
  'π is close to, but not exactly 3.1415',
  // ---- animals
  'Sheep sings while ship sinks',
  'Gold is fish and golf is dish',
  'I saw a cat sleeping in a box',
  'The fly flies and the flies fly',
  // ----
  'May the force be with you',
  'Run, Forrest! Run!',
  "That's what she said!",
  "Yo, yo, yo! 148-3 to the 3-to-the-6-to-the-9, representing the ABQ, what up, b*tch?",
  'Say my name'
])

let c = 0;
const e = document.querySelector('.write')
function swap(){
  c = ++c % s.length
  e.href = 'mailto:xr.granados@gmail.com?subject=' + s[c];
  e.innerText = s[c];
  e.dataset.original = s[c];
}
swap()
setInterval(swap, 9000)

function shuffle(array){
  for(let i=array.length-1; i>0; i--){
    const j = Math.floor(Math.random() * i)
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
