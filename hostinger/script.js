function changeicon(){
    let ham = document.getElementById('hamburger')
    ham.classList.toggle('hidden')
    let close = document.getElementById('close')
    close.classList.toggle('hidden')
    let menu = document.getElementById('menu')
    menu.classList.toggle('hidden')
}
document.querySelectorAll('ul li a[href="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    })
})