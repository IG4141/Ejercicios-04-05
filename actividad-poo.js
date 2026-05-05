// Actividad: Programacion Orientada a Objetos en JavaScript
// Incluye ejercicios de Nivel 1 a Nivel 5.

console.log("=== ACTIVIDAD POO EN JAVASCRIPT ===\n");

// -----------------------------------
// NIVEL 1: Objeto literal
// -----------------------------------
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar() {
    return `El ${this.marca} ${this.modelo} ha arrancado.`;
  },
};

console.log("Nivel 1");
console.log("Marca del auto:", auto.marca);
console.log(auto.arrancar());
console.log("");

// -----------------------------------
// NIVEL 2: Funcion constructora + new
// -----------------------------------
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function saludar() {
  return `Hola, soy ${this.nombre} y tengo ${this.edad} anos.`;
};

const persona1 = new Persona("Juan", 18);
const persona2 = new Persona("Maria", 20);

console.log("Nivel 2");
console.log(persona1.saludar());
console.log(persona2.saludar());
console.log("");

// -----------------------------------
// NIVEL 3: Uso de prototipos
// -----------------------------------
Persona.prototype.caminar = function caminar() {
  return `${this.nombre} dice: Estoy caminando.`;
};

console.log("Nivel 3");
console.log(persona1.caminar());
console.log(persona2.caminar());
console.log("");

// -----------------------------------
// NIVEL 4: Clases + herencia
// -----------------------------------
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido.`;
  }
}

class Perro extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  hacerSonido() {
    return `${this.nombre} dice: Guau!`;
  }
}

const animal1 = new Animal("AnimalGenerico");
const perro1 = new Perro("Firulais");

console.log("Nivel 4");
console.log(animal1.hacerSonido());
console.log(perro1.hacerSonido());
console.log("");

// -----------------------------------
// NIVEL 5: Desafio CuentaBancaria
// -----------------------------------
class CuentaBancaria {
  constructor(saldoInicial = 0) {
    this.saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto <= 0) {
      return "El monto a depositar debe ser mayor que 0.";
    }
    this.saldo += monto;
    return `Deposito exitoso. Nuevo saldo: $${this.saldo}`;
  }

  retirar(monto) {
    if (monto <= 0) {
      return "El monto a retirar debe ser mayor que 0.";
    }
    if (monto > this.saldo) {
      return `Fondos insuficientes. Saldo actual: $${this.saldo}`;
    }
    this.saldo -= monto;
    return `Retiro exitoso. Nuevo saldo: $${this.saldo}`;
  }

  verSaldo() {
    return `Saldo disponible: $${this.saldo}`;
  }
}

const cuenta1 = new CuentaBancaria(1000);

console.log("Nivel 5");
console.log(cuenta1.verSaldo());
console.log(cuenta1.depositar(500));
console.log(cuenta1.retirar(300));
console.log(cuenta1.retirar(2000));
console.log(cuenta1.verSaldo());
console.log("");

console.log("=== FIN DE LA ACTIVIDAD ===");
