


const container = document.querySelector('#container')

for(let i = 0; i <16; i++){
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.toggle('box');
        container.appendChild(div);
    }
}

function modify(e){
    e.target.classList.add('modified-box');
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', modify));