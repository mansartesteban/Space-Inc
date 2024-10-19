// class CharacterBehaviourMappingInput {
//     Inputs.map(Preference.moveForwardKey, CharacterBehaviour.moveForward)
//     Inputs.map(Preference.moveForwardKey, CharacterBehaviour.moveForward)
//     Inputs.map(Preference.moveForwardKey, CharacterBehaviour.moveForward)
//     Inputs.map(Preference.moveForwardKey, CharacterBehaviour.moveForward)
// }

import Component from "../../../../application/engine/core/Component";
import Character from "./Character";

export enum Directions {
  STANDING,
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
}
class CharacterBehaviour extends Component {
  character: Character;
  constructor(character: Character) {
    super();
    this.character = character;
  }

  moveTop() {
    this.character.mediator.move(Directions.TOP);
  }

  moveBottom() {
    this.character.mediator.move(Directions.BOTTOM);
  }

  moveLeft() {
    this.character.mediator.move(Directions.LEFT);
  }

  moveRight() {
    this.character.mediator.move(Directions.RIGHT);
  }

  standing() {
    this.character.mediator.move(Directions.STANDING);
  }
}

export default CharacterBehaviour;
