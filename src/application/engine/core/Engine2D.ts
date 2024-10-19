import Observer from "../../commons/Observer";
import Timer from "../lib/time/Timer";
import Project from "./Project";

enum Events {
  INITIALIZED = "INITIALIZED",
}

class Engine2D {
  project?: Project;

  observer: Observer;

  timer: Timer;

  constructor() {
    this.observer = new Observer(Object.keys(Events));
    this.observer.$on(Events.INITIALIZED, this.loop.bind(this));
    this.timer = new Timer();
  }

  setProject(project: Project) {
    this.project = project;
    this.observer.$emit(Events.INITIALIZED);
  }

  loop() {
    if (this.project && this.timer.delta > 1000) {
      this.project.scenes.forEach((scene) => scene.update());
      this.project.loop();
      this.timer.reset();
    }

    window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default Engine2D;
