const container = document.querySelector('.grid_container');


for (let i = 0; i<16; i++) {
    for (let k = 0; k<16; k++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = 'box';
        container.appendChild(content); 
    }   
}




 