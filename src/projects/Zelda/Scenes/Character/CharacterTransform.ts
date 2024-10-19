import Transform from "../../../../application/engine/core/Components/Transform";
import Timer from "../../../../application/engine/lib/time/Timer";
import Character from "./Character";
import { Directions } from "./CharacterBehaviour";

const moveSteps = (100 / 16) * 5;
class CharacterTransform extends Transform {
  character: Character;
  timer: Timer;

  constructor(character: Character, options: TRendererOptions) {
    super(undefined, undefined, undefined, options);
    this.character = character;
    this.timer = new Timer();
  }

  move(direction: Directions) {
    if (this.timer.delta > this.options.updateFrequency) {
      if (direction === Directions.TOP) {
        this.position.y -= moveSteps;
      } else if (direction === Directions.BOTTOM) {
        this.position.y += moveSteps;
      } else if (direction === Directions.LEFT) {
        this.position.x -= moveSteps;
      } else if (direction === Directions.RIGHT) {
        this.position.x += moveSteps;
      }
      this.timer.reset();
    }
  }
}

export default CharacterTransform;
