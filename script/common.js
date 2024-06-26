function changeBackground(inputId)
{
    document.getElementById(inputId).addEventListener('mouseenter',function(){
    const rhombusBack = document.getElementById(inputId);
    rhombusBack.style.backgroundColor='pink';
});
}
function whiteBackground(inputId)
{
    document.getElementById(inputId).addEventListener('mouseleave',function(){
        const rhombusBack = document.getElementById(inputId);
        rhombusBack.style.backgroundColor='white';
    });
}