import Command from "../../../../../application/engine/core/Command";

import CharacterBehaviour from "../CharacterBehaviour";

class MoveBottomCommand extends Command {
  characterBehaviour: CharacterBehaviour;

  constructor(characterBehaviour: CharacterBehaviour) {
    super();
    this.characterBehaviour = characterBehaviour;
  }
  execute() {
    this.characterBehaviour.moveBottom();
  }
}

export default MoveBottomCommand;
