import Entity from "@/application/engine/core/Entity";

class Component {
  options: { [key: string]: any } = {};

  constructor(options?: { [key: string]: any }) {
    if (options) {
      this.options = options;
    }
  }

  updateComponent(entity: Entity) {
    this.update(entity);
  }

  update(_: Entity) {}
}

export default Component;
