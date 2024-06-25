function calculateEllipseArea(){
    const a = parseFloat(document.getElementById('ellipse-a').value);
    const b = parseFloat(document.getElementById('ellipse-b').value);
    const area = ((22/7)*a*b).toFixed(4);
    document.getElementById('ellipse-area').innerText= area;
}