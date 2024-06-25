function calculateParallelogramArea(){
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);
    const area = base*height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText= area;
}