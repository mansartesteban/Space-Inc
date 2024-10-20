type TProjectOptions = {
  name: String;
  engine: String;
};

type TViewerOptions = {
  size?: Vector2;
  color?: Color;
};

type TViewer2dOptions = TViewerOptions & {};

type TRendererOptions = {
  updateFrequency: number;
};

type TInputCommandOptions = {
  triggerOnce?: boolean;
};
