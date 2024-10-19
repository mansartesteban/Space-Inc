import { transform } from "typescript";
import Scene from "../../../../application/engine/core/Scene";
import Img from "../../../../application/engine/draw/Img";
import TILE1 from "../../Assets/Textures/water.png";
import Transform from "../../../../application/engine/core/Components/Transform";
import Vector2 from "../../../../application/engine/lib/geometry/Vector2";
class Map {
  tiles: Img[] = [];
  scene: Scene;
  transform: Transform;
  constructor(scene: Scene) {
    this.tiles.push(new Img(TILE1));
    this.scene = scene;
    this.transform = new Transform(undefined, new Vector2(4, 4));
  }

  update() {
    console.log("update tile");
    this.tiles.forEach((tile) => tile.draw(this.scene.viewer, this.transform));
  }
}

export default Map;
