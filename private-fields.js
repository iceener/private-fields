// Class fields
class Person {
  _name = 'Adam';
}

const overment = new Person();
overment._name; /*?*/


// Step 2 - Constructor
class Person {
  _name;

  constructor(name) {
    this._name = name;
  }
}

const overment = new Person('Adam');
overment._name; /*?*/

// Step 3 - Getter
class Person {
  _name;

  constructor(name) {
    this._name = name;
  }
}

const overment = new Person('Adam');
overment.name; /*?*/

// Step 4 - It's private!
class Person {
  _name;

  constructor(name) {
    this._name = name;
  }

  sayHello() {
    return `Hello ${this._name}`;
  }
}

const overment = new Person('Adam');
overment.name; /*?*/
overment.sayHello(); /*?*/
overment._name = 'Overment'; /*?*/
overment.sayHello(); /*?*/

// Step 5 - True private
class Person {
  #_name;

  constructor(name) {
    this.#_name = name;
  }

  get name() {
    return this.#_name;
  }

  sayHello() {
    return `Hello ${this.#_name}`;
  }
}

const overment = new Person('Adam');
overment.name; /*?*/
overment.sayHello(); /*?*/
