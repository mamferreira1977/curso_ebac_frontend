// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Diana', nota: 9 },
    { nome: 'Eduardo', nota: 4 },
];

// Função para retornar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Usando a função
const aprovados = alunosAprovados(alunos);
console.log(aprovados);

