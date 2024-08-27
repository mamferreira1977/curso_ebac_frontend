class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      return `${this.nome} faz um som.`;
    }
  
    dormir() {
      return `${this.nome} está dormindo.`;
    }
  }
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade); // Chama o construtor da classe base
      this.raca = raca;
    }
  
    falar() {
      return `${this.nome} diz: Au Au!`;
    }
  
    correr() {
      return `${this.nome} está correndo.`;
    }
  }
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade); // Chama o construtor da classe base
      this.cor = cor;
    }
  
    falar() {
      return `${this.nome} diz: Miau!`;
    }
  
    escalar() {
      return `${this.nome} está escalando.`;
    }
  }
// Instâncias de Cachorro
const rex = new Cachorro('Rex', 5, 'Labrador');
const bolha = new Cachorro('Bolha', 2, 'Poodle');

// Instância de Gato
const mimi = new Gato('Mimi', 3, 'Preto');

// Utilizando os métodos
console.log(rex.falar());  // Saída: Rex diz: Au Au!
console.log(bolha.correr());  // Saída: Bolha está correndo.
console.log(mimi.falar());  // Saída: Mimi diz: Miau!
console.log(mimi.escalar());  // Saída: Mimi está escalando.
      