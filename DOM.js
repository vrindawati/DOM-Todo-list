let b = document.body;
let div = document.createElement('div');
b.appendChild(div);
div.classList.add('container');  

let h1 = document.createElement('h1');  
h1.innerText = 'Todolist';
div.appendChild(h1);
div.style.textAlign = 'center';
h1.style.padding = '20px';
h1.style.color = 'white';

let p = document.createElement('p');
p.innerText = 'Each day I accomplish a task on my todolist';
div.appendChild(p);
p.style.color = 'white';

let heading2 = document.createElement('h2');
heading2.innerText = 'Read a book';
div.appendChild(heading2);
heading2.style.color = 'white';
heading2.style.padding = '20px';
heading2.style.textAlign = 'left';

let p2 = document.createElement('p');
p2.innerText = 'My name is Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.';  // Corrected text
p2.style.color = 'black';
p2.style.padding = '20px';
p2.style.textAlign = 'left';
div.appendChild(p2);

let div2 = document.createElement('div');
div.appendChild(div2);

let bt = document.createElement('button');
bt.innerText = 'Start';
bt.style.padding = '20px';
bt.style.backgroundColor = 'yellow'; 
bt.style.borderRadius = '10px';
bt.style.paddingInline = '50px';
div2.appendChild(bt);

let p3 = document.createElement('p');
p3.innerText = 'did not skip';
p3.style.textDecoration = 'underline';
div.appendChild(p3);

