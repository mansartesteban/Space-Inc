import Img from "../../Assets/sprite7.png";
import Sprite from "../../../../application/engine/draw/Sprite";
import Render2DComponent from "../../../../application/engine/core/Components/RenderComponent";
import SpriteSequence from "../../../../application/engine/draw/SpriteSequence";
import { Directions } from "./CharacterBehaviour";
import Character from "./Character";
import Timer from "../../../../application/engine/lib/time/Timer";

class CharacterRenderer extends Render2DComponent {
  character: Character;

  sprite?: Sprite;

  #activeSequence!: SpriteSequence;

  sequences: { [key: number]: SpriteSequence } = {};

  animating: Boolean = false;

  timer: Timer;

  constructor(character: Character, options: TRendererOptions) {
    super(options);
    this.character = character;

    this.createSequences();
    this.timer = new Timer();
  }

  get activeSequence(): SpriteSequence {
    return this.#activeSequence;
  }

  set activeSequence(activeSequence: SpriteSequence) {
    this.#activeSequence = activeSequence;

    // This kind of thing which seems to be useless but is not :D
    this.#activeSequence.current = this.#activeSequence.current;
  }

  createSequences() {
    this.sprite = new Sprite(Img, {
      columns: 10,
      rows: 8,
      scale: 1,
    });

    this.sequences[Directions.TOP] = new SpriteSequence(
      this.sprite,
      [60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
    );
    this.sequences[Directions.BOTTOM] = new SpriteSequence(
      this.sprite,
      [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    );
    this.sequences[Directions.LEFT] = new SpriteSequence(
      this.sprite,
      [50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
    );
    this.sequences[Directions.RIGHT] = new SpriteSequence(
      this.sprite,
      [79, 78, 77, 76, 75, 74, 73, 72, 71, 70]
    );
    this.sequences[Directions.STANDING] = new SpriteSequence(this.sprite, [0]);
    this.activeSequence = this.sequences[0];
  }

  /*
  STANDING RIGHT =  74
  STANDING BOTTOM = 0
  STANDING LEFT = 55
  STANDING TOP = 65
  */

  animateMove(direction: Directions) {
    if (this.timer.delta >= this.options.updateFrequency) {
      this.changeDirection(direction);
      this.activeSequence.next();
      this.timer.reset();
    }
  }

  changeDirection(direction: Directions) {
    this.activeSequence = this.sequences[direction];
  }

  animate() {
    this.activeSequence.next();
  }

  render() {
    this.activeSequence.draw(
      this.character.scene.viewer,
      this.character.transform
    );
  }
}

export default CharacterRenderer;
