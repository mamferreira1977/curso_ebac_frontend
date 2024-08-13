function mediaAritmetica(...numeros) {
    if (numeros.length === 0) return 0; // Evita divisão por zero
    const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / numeros.length;
}


