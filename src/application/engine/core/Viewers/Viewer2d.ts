import Color from "../../lib/Color";
import Vector2 from "../../lib/geometry/Vector2";
import IViewer from "./Viewer";

class Viewer2d implements IViewer {
  size: Vector2;
  color: Color;
  #ctx?: CanvasRenderingContext2D;

  node: HTMLCanvasElement;

  constructor(options?: TViewer2dOptions) {
    this.size = options?.size || new Vector2();
    this.color = options?.color || Color.Black;
    this.color.opacity = 0.01;
    this.node = document.createElement("canvas");
    if (this.#ctx) {
      this.#ctx.globalCompositeOperation = "difference";
    }
  }
  get ctx(): CanvasRenderingContext2D {
    if (!this.#ctx) {
      throw new Error("No CanvasRenderingContext2D existing");
    }
    return this.#ctx;
  }

  set ctx(ctx: CanvasRenderingContext2D) {
    this.#ctx = ctx;
  }

  render(node: Element) {
    let ctx = this.node.getContext("2d");
    if (!ctx) {
      throw new Error("Unable to get context '2d' from canvas, aborting !");
    }

    this.ctx = ctx;

    this.node.width = this.size.x;
    this.node.height = this.size.y;

    this.ctx.translate(this.size.x / 2, this.size.y / 2);
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);

    node.append(this.node);
  }
  refresh() {
    console.log("refreshing viewer");
    this.ctx.clearRect(
      -this.size.x / 2,
      -this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }
}

export default Viewer2d;
