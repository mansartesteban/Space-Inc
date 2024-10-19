import Command from "../../../../../application/engine/core/Command";

import CharacterBehaviour from "../CharacterBehaviour";

class MoveRightCommand extends Command {
  characterBehaviour: CharacterBehaviour;

  constructor(characterBehaviour: CharacterBehaviour) {
    super();
    this.characterBehaviour = characterBehaviour;
  }
  execute() {
    this.characterBehaviour.moveRight();
  }
}

export default MoveRightCommand;
