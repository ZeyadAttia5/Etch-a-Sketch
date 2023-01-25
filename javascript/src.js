


const container = document.querySelector('#container')

for(let i = 0; i <25; i++){
    for (let j = 0; j < 25; j++) {
        const div = document.createElement('div');
        div.classList.toggle('box');
        container.appendChild(div);
    }
}


let boxes = document.querySelectorAll('.box');

const erase = document.querySelector('#erase');
erase.addEventListener('click', clear);

const pen = document.querySelector('#pen');
pen.addEventListener('click', modify);

const size = document.querySelector('#size');
size.addEventListener('click', changeSize);


function changeSize(e){
    let s = prompt()
    s = parseInt(s);
    if(s > 0 && s <= 100){
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        for(let i = 0; i <s; i++){
            for (let j = 0; j < s; j++) {
                const div = document.createElement('div');
                div.classList.add('box');
                container.appendChild(div);
                div.style.height = `${s*(625/(s*s))}px`;
                div.style.width = `${s*(625/(s*s))}px`;
            }
        }
        //container.style.height = `${s*s}px`;
        //container.style.width = `${s*s}px`;
        container.style.gridTemplateColumns = `repeat(${s}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${s}, 1fr)`;
        console.log(boxes.length);
        boxes = document.querySelectorAll('.box');
    }
    else
        return
}


function clear(e){
    boxes.forEach(box => box.addEventListener('mousemove', clean));
}
function clean(e){
    e.target.classList.remove('modified-box');
}

function modify(e){
    
    boxes.forEach(box => box.removeEventListener('mousemove', clean))
    boxes.forEach(box => box.addEventListener('mousedown', mouseDownHandle));
    boxes.forEach(box => box.addEventListener('mouseup', removePen));
}

function removePen(e){
    boxes.forEach(box => box.removeEventListener('mousemove', mouseMoveHandle));
}

function mouseDownHandle(e){
    boxes.forEach(box => box.addEventListener('mousemove', mouseMoveHandle));
}

function mouseMoveHandle(e){
    e.target.classList.add('modified-box');
    
}
