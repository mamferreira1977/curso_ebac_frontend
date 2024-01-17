function validarFormulario() {
    
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

   
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

   
    if (campoB > campoA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B não é maior que A.");
    }
}

    
