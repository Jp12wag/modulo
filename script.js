function validarCedula() {
    const cedula = document.getElementById("cedula").value;
    const resultado = document.getElementById("resultado");

    if (cedula.length !== 11 || isNaN(cedula)) {
        resultado.innerText = "Cédula inválida. Debe contener 11 dígitos numéricos.";
        resultado.style.color = "red";
        return;
    }

    let suma = 0;
    const pesos = [1, 2]; // Alterna entre 1 y 2

    for (let i = 0; i < 10; i++) {
        let num = parseInt(cedula[i]);
        let peso = pesos[i % 2];
        let mult = num * peso;

        // Si la multiplicación es mayor a 9, sumar los dígitos del resultado
        if (mult > 9) {
            mult = Math.floor(mult / 10) + (mult % 10);
        }

        suma += mult;
    }

    // Validar el dígito verificador
    const verificador = (10 - (suma % 10)) % 10;
    
    if (verificador === parseInt(cedula[10])) {
        resultado.innerText = "Cédula válida.";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Cédula inválida.";
        resultado.style.color = "red";
    }
}
