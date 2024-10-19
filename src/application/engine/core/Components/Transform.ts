import Rotation from "../../lib/geometry/Rotation";
import Vector2 from "../../lib/geometry/Vector2";
import Component from "../Component";

class Transform extends Component {
  position: Vector2;

  scale: Vector2;

  rotation: Rotation;

  constructor(
    position: Vector2 = new Vector2(),
    scale: Vector2 = new Vector2(1, 1),
    rotation: Rotation = new Rotation(),
    options?: { [key: string]: any }
  ) {
    super(options);
    this.position = position;
    this.scale = scale;
    this.rotation = rotation;
  }
}

export default Transform;
