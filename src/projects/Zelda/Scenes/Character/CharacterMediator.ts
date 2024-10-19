import MediatorComponent from "../../../../application/engine/core/Components/MediatorComponent";
import Character from "./Character";
import { Directions } from "./CharacterBehaviour";

class CharacterMediator extends MediatorComponent {
  character: Character;

  constructor(character: Character) {
    super();

    this.character = character;
  }

  move(direction: Directions) {
    // this.character.transform.move(direction)
    this.character.renderer.animateMove(direction);
    this.character.transform.move(direction);
  }
}

export default CharacterMediator;
