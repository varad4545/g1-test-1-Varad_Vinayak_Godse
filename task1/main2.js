

var button = document.getElementById('btn');

function changeColor(){
    button.addEventListener('click', () => {
        const r = Math.floor(Math.random()*(255 + 1));
        const g = Math.floor(Math.random()*(255 + 1));
        const b = Math.floor(Math.random()*(255 + 1));
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
}

changeColor();