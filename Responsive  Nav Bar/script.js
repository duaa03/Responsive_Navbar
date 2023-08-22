const bar=document.querySelector('.bar');
const ul = document.querySelector('ul');

bar.addEventListener('click',()=>{

    ul.classList.toggle('baractive');
let bar_child= bar.firstElementChild;
if(ul.classList.contains('baractive'))
{
    bar_child.classList.replace('fa-bars','fa-times');
}
else{
    bar_child.classList.replace('fa-times' ,'fa-bars');

}
});