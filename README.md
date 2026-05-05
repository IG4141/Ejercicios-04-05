# Actividad 04/05 - POO en JavaScript

En este trabajo resolvi la actividad completa de POO en JavaScript.

## Contenido del repositorio

- `actividad-poo.js`: ejercicios resueltos (Nivel 1 a Nivel 5).
- `README.md`: explicacion corta y respuestas directas.

## Como ejecutar

1. Tener instalado Node.js.
2. En la terminal, ubicarse en la carpeta del proyecto.
3. Ejecutar:

```bash
node actividad-poo.js
```

## Resumen teorico (simple)

### Que es la POO

La Programacion Orientada a Objetos organiza el codigo en objetos con:

- Propiedades (datos)
- Metodos (acciones)

Ejemplo:

```js
const persona = {
  nombre: "Juan",
  saludar() {
    return "Hola";
  },
};
```

### Importante en JavaScript

JavaScript no funciona con clases "reales" por dentro, funciona con prototipos.
O sea, un objeto puede heredar cosas de otro por la cadena de prototipos.

### Prototipos

Todos los objetos tienen un prototipo del que heredan metodos.

```js
const obj = {};
obj.toString(); // viene de Object.prototype
```

Cadena interna basica:

`obj -> Object.prototype -> null`

### Funciones constructoras y new

Se usan para crear varios objetos parecidos.

```js
function Perro(nombre) {
  this.nombre = nombre;
}

Perro.prototype.ladrar = function () {
  return "Guau";
};

const perro1 = new Perro("Firulais");
```

Que hace `new`:

- Crea un objeto nuevo
- Asigna `this` al nuevo objeto
- Conecta el prototipo automaticamente

### Clases (ES6)

Las clases son una forma mas prolija de escribir lo mismo (prototipos).

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    return `${this.nombre} hace ruido`;
  }
}
```

### Herencia con extends

Sirve para reutilizar codigo de una clase base.

```js
class Gato extends Animal {
  maullar() {
    return "Miau";
  }
}
```

- `extends`: hereda de otra clase
- `super()`: llama al constructor padre

### Pilares de la POO (resumen)

- Encapsulacion: agrupar datos y metodos
- Abstraccion: mostrar lo necesario y ocultar complejidad
- Herencia: reutilizar codigo
- Polimorfismo: mismo metodo con distintos comportamientos

## Ejercicios resueltos

### Nivel 1

- Objeto `auto` con:
  - `marca`
  - `modelo`
  - metodo `arrancar()`
- Acceso a propiedad: `auto.marca`

### Nivel 2

- Funcion constructora `Persona(nombre, edad)`
- Metodo `saludar()`
- Creacion de 2 personas con `new`

### Nivel 3

- Metodo agregado por prototipo:

```js
Persona.prototype.caminar = function () {
  return "Estoy caminando";
};
```

### Nivel 4

- Clase `Animal` con `nombre` y `hacerSonido()`
- Clase `Perro` que hereda de `Animal`

### Nivel 5

- Clase `CuentaBancaria` con:
  - `saldo`
  - `depositar()`
  - `retirar()`
  - `verSaldo()`

Tambien agregue validaciones de montos y fondos insuficientes.

## Preguntas para estudiar (respuestas directas)

### Conceptuales

1. Que es un objeto en JavaScript?
   - Es una estructura que guarda datos y funciones en pares clave-valor.

2. Diferencia entre clase y objeto?
   - Clase: es el molde.
   - Objeto: es la instancia creada con ese molde.

3. Que es un prototipo?
   - Es el objeto del que otro hereda propiedades y metodos.

4. Que hace `new`?
   - Crea un objeto nuevo, conecta el prototipo y ejecuta el constructor.

5. Por que JS no es realmente orientado a clases?
   - Porque por dentro hereda con prototipos, no con clases puras.

### Tecnicas

1. Diferencia entre metodo dentro del constructor y en `prototype`?
   - En constructor: cada objeto tiene su propia copia del metodo.
   - En `prototype`: todos los objetos comparten el mismo metodo.

2. Que hace `extends`?
   - Hace que una clase herede de otra.

3. Para que sirve `super()`?
   - Sirve para llamar al constructor (o metodos) de la clase padre.

4. Que es la `prototype chain`?
   - Es la cadena que JS recorre para encontrar una propiedad o metodo.

### Pensamiento

1. Cuando conviene usar POO y cuando no?
   - Conviene cuando hay objetos con estado y comportamiento.
   - No conviene tanto en problemas chicos donde algo simple alcanza.

2. Que ventaja tiene sobre codigo "normal"?
   - Ordena mejor el codigo y ayuda a reutilizar.

3. Que problema resuelve la herencia?
   - Evita repetir codigo que varias clases tienen en comun.

## Frase clave

En JavaScript, por dentro todo gira alrededor de objetos y prototipos.
