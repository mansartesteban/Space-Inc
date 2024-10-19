import Command from "../../../../../application/engine/core/Command";

import CharacterBehaviour from "../CharacterBehaviour";

class MoveLeftCommand extends Command {
  characterBehaviour: CharacterBehaviour;

  constructor(characterBehaviour: CharacterBehaviour) {
    super();
    this.characterBehaviour = characterBehaviour;
  }
  execute() {
    this.characterBehaviour.moveLeft();
  }
}

export default MoveLeftCommand;
