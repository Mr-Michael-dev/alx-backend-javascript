// Implement a class named Airport

export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  // Getters
  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Setters
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // default toString method to create default string description of class
  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
