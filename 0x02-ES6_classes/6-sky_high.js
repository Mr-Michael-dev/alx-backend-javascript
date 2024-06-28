// Implement a class named SkyHighBuilding that extends from Building
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('Floor must be a number');
    }
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // evacuation message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
