import Command from "../../../../../application/engine/core/Command";

import CharacterBehaviour from "../CharacterBehaviour";

class MoveTopCommand extends Command {
  characterBehaviour: CharacterBehaviour;

  constructor(characterBehaviour: CharacterBehaviour) {
    super();
    this.characterBehaviour = characterBehaviour;
  }
  execute() {
    this.characterBehaviour.moveTop();
  }
}

export default MoveTopCommand;
