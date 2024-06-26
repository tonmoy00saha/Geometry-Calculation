function calculatePentagonArea(){
    const perimeter = getInputValueId('pentagon-perimeter');
    const apothem = getInputValueId('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInputValueId('pentagon-area',area);

}
function getInputValueId(inputfieldId){
    const inputfield = document.getElementById(inputfieldId);
    const inputValueText = inputfield.value;
    const value= parseFloat(inputValueText);
    return value;
}
function setInputValueId(inputfieldId,area){
    const areaspan = document.getElementById(inputfieldId);
    areaspan.innerText = area;
}
changeBackground('penta-back');
whiteBackground('penta-back');