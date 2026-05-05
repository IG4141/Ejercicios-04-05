# Actividad 04/05 - POO en JavaScript

Este repositorio contiene la actividad completa sobre Programacion Orientada a Objetos (POO) en JavaScript.

## Contenido del repositorio

- `actividad-poo.js`: resolucion de todos los ejercicios (Nivel 1 a Nivel 5).
- `README.md`: explicacion teorica y respuestas para estudiar.

## Como ejecutar

1. Tener instalado Node.js.
2. En la terminal, ubicarse en la carpeta del proyecto.
3. Ejecutar:

```bash
node actividad-poo.js
```

## Resumen teorico

### Que es la POO

La Programacion Orientada a Objetos es un paradigma que organiza el codigo en objetos con:

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

JavaScript no es un lenguaje orientado a clases en su base, sino orientado a prototipos.
Eso significa que los objetos heredan de otros objetos mediante la cadena de prototipos.

### Prototipos

Todos los objetos tienen acceso a un prototipo.

```js
const obj = {};
obj.toString(); // viene de Object.prototype
```

Cadena interna:

`obj -> Object.prototype -> null`

### Funciones constructoras y new

Sirven para crear varios objetos similares.

```js
function Perro(nombre) {
  this.nombre = nombre;
}

Perro.prototype.ladrar = function () {
  return "Guau";
};

const perro1 = new Perro("Firulais");
```

`new`:

- Crea un objeto nuevo
- Asigna `this` al nuevo objeto
- Conecta el prototipo automaticamente

### Clases (ES6)

Son azucar sintactico sobre el sistema de prototipos.

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

Permite reutilizar codigo de una clase base.

```js
class Gato extends Animal {
  maullar() {
    return "Miau";
  }
}
```

- `extends`: hereda de otra clase
- `super()`: llama al constructor padre

### Pilares de la POO

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

Incluye validaciones de montos y fondos insuficientes.

## Preguntas para estudiar

### Conceptuales

1. Que es un objeto en JavaScript?
   - Es una estructura que agrupa datos (propiedades) y comportamiento (metodos) en pares clave-valor.

2. Diferencia entre clase y objeto?
   - Clase: plantilla para crear objetos.
   - Objeto: instancia concreta creada a partir de una clase o constructor.

3. Que es un prototipo?
   - Es el objeto del que otro objeto hereda propiedades y metodos.

4. Que hace `new`?
   - Crea un nuevo objeto, vincula su prototipo y ejecuta el constructor con `this`.

5. Por que JS no es realmente orientado a clases?
   - Porque la herencia real funciona por prototipos; las clases de ES6 son una sintaxis mas amigable.

### Tecnicas

1. Diferencia entre metodo dentro del constructor y en `prototype`?
   - En constructor: cada instancia crea su propia copia del metodo.
   - En `prototype`: todas las instancias comparten el mismo metodo (mas eficiente en memoria).

2. Que hace `extends`?
   - Crea una relacion de herencia entre clases.

3. Para que sirve `super()`?
   - Para llamar al constructor o metodos de la clase padre.

4. Que es la `prototype chain`?
   - Es la cadena de objetos prototipo que JS recorre al buscar una propiedad o metodo.

### Pensamiento

1. Cuando conviene usar POO y cuando no?
   - Conviene cuando hay entidades con estado y comportamiento reutilizable.
   - No siempre conviene para tareas simples o transformaciones funcionales.

2. Que ventaja tiene sobre codigo "normal"?
   - Mejor organizacion, reutilizacion y mantenimiento en proyectos medianos/grandes.

3. Que problema resuelve la herencia?
   - Evita duplicar codigo compartiendo comportamiento comun entre clases.

## Frase clave para la escuela

En JavaScript todo gira alrededor de objetos y prototipos.
