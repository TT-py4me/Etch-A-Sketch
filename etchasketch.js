const container = document.querySelector('.grid_container');


for (let i = 0; i<16; i++) {
    for (let k = 0; k<16; k++) {
        function changeColor(){
            content.setAttribute('style', 'background-color:blue')
            return;
        }
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = 'box';
        content.addEventListener('mouseover', changeColor)
        container.appendChild(content); 
    }   
}




 