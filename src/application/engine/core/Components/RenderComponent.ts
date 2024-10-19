import Entity from "@/application/engine/core/Entity";
import Component from "@/application/engine/core/Component";
import ImplementError from "../../../error/ImplementError";

class Render2DComponent extends Component {
  constructor(options: TRendererOptions) {
    super();
    this.options = {
      updateFrequency: 16,
    };
    if (options) {
      this.options = { ...this.options, ...options };
    }
  }

  update(entity: Entity) {
    this.render(entity);
  }

  render(_: Entity) {
    throw new ImplementError("render", "RenderComponent");
  }
}

export default Render2DComponent;
