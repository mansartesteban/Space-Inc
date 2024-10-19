import Entity from "../../../../application/engine/core/Entity";
import Scene from "../../../../application/engine/core/Scene";
import CharacterBehaviour from "./CharacterBehaviour";
import CharacterMediator from "./CharacterMediator";
import CharacterRenderer from "./CharacterRenderer";
import CharacterTransform from "./CharacterTransform";
class Character extends Entity {
  mediator: CharacterMediator;
  behaviour: CharacterBehaviour;
  renderer: CharacterRenderer;
  transform: CharacterTransform;

  constructor(scene: Scene) {
    super(scene);

    let updateFrequency = 16 * 3;
    this.behaviour = new CharacterBehaviour(this);
    this.renderer = new CharacterRenderer(this, {
      updateFrequency: updateFrequency,
    });
    this.transform = new CharacterTransform(this, {
      updateFrequency: updateFrequency,
    });
    this.mediator = new CharacterMediator(this);

    this.addComponent(this.renderer);
    this.addComponent(this.behaviour);
  }
}

export default Character;
