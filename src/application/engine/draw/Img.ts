import Transform from "../core/Components/Transform";
import Viewer2d from "../core/Viewers/Viewer2d";
import { IDrawable } from "../Draw";

class Img implements IDrawable {
  #path: string;
  img: HTMLImageElement;
  imgLoaded: boolean;

  constructor(path: string) {
    this.#path = path;
    this.img = new Image();
    this.imgLoaded = false;

    this.#loadImage();
  }

  #loadImage() {
    this.img.onload = () => {
      this.imgLoaded = true;
    };
    this.img.src = this.#path;
  }

  draw(viewer: Viewer2d, transform: Transform = new Transform()) {
    let ctx = viewer.ctx;
    let position = transform.position;
    let scale = transform.scale;
    let rotation = transform.rotation;
    if (this.imgLoaded) {
      ctx.save();
      ctx.translate(position.x, position.y);
      ctx.rotate(-rotation.angle);
      ctx.translate(-position.x, -position.y);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(
        this.img,
        position.x,
        position.y,
        this.img.width,
        this.img.height,
        position.x - (this.img.width * scale.x) / 2,
        position.y - (this.img.height * scale.y) / 2,
        this.img.width * scale.x,
        this.img.height * scale.y
      );
      ctx.restore();
      console.log("drawing img");
    }
  }
}

export default Img;
