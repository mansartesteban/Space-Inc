import ImplementError from "../../error/ImplementError";

type TCommandOptions = {};

class Command {
  options: TCommandOptions = {};

  constructor(options?: TCommandOptions) {
    if (options) {
      this.options = { ...this.options, ...options };
    }
  }

  execute() {
    throw new ImplementError("execute", "Command");
  }
}

export default Command;
