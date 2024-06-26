function calculateRhombusArea(){
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);
    const area = 0.5 *  d1 * d2;
    const spanRhombusArea = document.getElementById('rhombus-area');
    spanRhombusArea.innerText= area;
}

changeBackground('rhombus-back');
whiteBackground('rhombus-back')