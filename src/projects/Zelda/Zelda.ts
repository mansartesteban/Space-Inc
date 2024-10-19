import Project from "@/application/engine/core/Project";
import Character from "./Scenes/Character/Character";
import Scene from "../../application/engine/core/Scene";
import Inputs from "../../application/engine/Inputs";
import MoveTopCommand from "./Scenes/Character/Commands/MoveTopCommand";
import MoveBottomCommand from "./Scenes/Character/Commands/MoveBottomCommand";
import MoveLeftCommand from "./Scenes/Character/Commands/MoveLeftCommand";
import MoveRightCommand from "./Scenes/Character/Commands/MoveRightCommand";
import Map from "./Scenes/Map/Map";

class Zelda extends Project {
  options: TProjectOptions = {
    name: "Zelda",
    engine: "2d",
  };

  inputs?: Inputs;
  map?: Map;
  constructor() {
    super();
  }

  setup() {
    let scene = new Scene("main", this.viewer);
    this.addScene(scene);
    let character = new Character(this.getScene("main"));

    this.inputs = new Inputs();

    this.inputs.bindCommand("z", new MoveTopCommand(character.behaviour));
    this.inputs.bindCommand("s", new MoveBottomCommand(character.behaviour));
    this.inputs.bindCommand("q", new MoveLeftCommand(character.behaviour));
    this.inputs.bindCommand("d", new MoveRightCommand(character.behaviour));

    this.map = new Map(scene);
  }
  loop() {
    this.inputs?.update();
    this.map?.update();
  }
}

export default Zelda;
