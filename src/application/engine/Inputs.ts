import ICommand from "./core/Command";

class Inputs {
  collector: string[] = [];

  commandStack: {
    key: string;
    options: TInputCommandOptions;
    command: ICommand;
  }[] = [];

  constructor() {
    let context = document;

    context.addEventListener("keydown", (e) => {
      e.preventDefault();
      let key = (e as KeyboardEvent).key.toLowerCase();
      if (!this.collector.includes(key) && !["dead"].includes(key)) {
        this.collector.push(key);
      }
    });
    context.addEventListener("keyup", (e) => {
      e.preventDefault();
      let foundIndex = this.collector.findIndex(
        (key) => key === (e as KeyboardEvent).key.toLowerCase()
      );
      if (foundIndex >= 0) {
        this.collector.splice(foundIndex, 1);
      }
    });
  }

  update() {
    this.commandStack.forEach((commandDescriptor) => {
      if (this.collector.includes(commandDescriptor.key)) {
        commandDescriptor.command.execute();
      }
    });
  }

  bindCommand(
    key: string,
    command: ICommand,
    options: TInputCommandOptions = {}
  ) {
    this.commandStack.push({
      key,
      options,
      command,
    });
  }
}

export default Inputs;
