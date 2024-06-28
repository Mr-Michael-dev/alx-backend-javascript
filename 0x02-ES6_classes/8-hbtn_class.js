class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Define Symbol.toPrimitive to handle type casting
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    // Default behavior
    return this._location;
  }

  // Getters for the attributes
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }
}
