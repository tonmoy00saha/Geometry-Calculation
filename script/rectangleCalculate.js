function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidth.value);
    const rectangleLength = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLength.value);
    const area= width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText= area;
}