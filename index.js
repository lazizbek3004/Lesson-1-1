let button = document.querySelector('.btn');
let link = document.querySelector('.link')
let icon = document.querySelector('.icon')
let myh1 = document.querySelector('.myh1')

button.addEventListener('click', ()=>{
   if(link.classList.contains('hey')){
    icon.className = 'icon fa-brands fa-x-twitter'
    icon.style.color = 'black';
    myh1.textContent = 'Twitter'

    link.href = 'https://twitter.com/'
    link.className = 'link'
   }else{
    icon.className = 'icon fa-brands fa-youtube'
    icon.style.color = 'red'
    myh1.textContent = 'You tube'

    link.href = 'https://www.youtube.com/'
    link.classList.add('hey')

   }


})








