const container = document.querySelector('.grid_container');

let size = 16;

function printGrid(size, width) {

for (let i = 0; i<size; i++) {
    for (let k = 0; k<size; k++) {
        function changeColor(){
            content.setAttribute('style', 'background-color:blue')
            content.style.width = width;
            content.style.height = `${(100/size)*13.5}px`;
            return;
        }
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = 'box';
        content.style.width = width;
        content.style.height = `${(100/size)*13.5}px`;
        content.addEventListener('mouseover', changeColor)
        container.appendChild(content); 
    }   
   
}
return;
}

printGrid(16);
const button = document.querySelector('.button');
button.addEventListener('click', changeSize)

function changeSize(e){
    console.log(e)
    do {
    size = window.prompt("Please enter grid size (<100)") 
    } while(size>99)
    if(size<100){
    container.innerHTML='';
    const width = (100/size) + "%";
    printGrid(size, width)//
    }
}









 