let hideTextBtn = document.getElementById('hideTextBtn');

let hide = document.getElementById('hideText');

hideTextBtn.addEventListener('click', toggletext);

function toggletext(){
    hideText.classList.toggle('show');

    if(hideTextBtn.classList.contains ('show')){
        hideTextBtn.innerHTML = 'Ver Menos';
    }
}