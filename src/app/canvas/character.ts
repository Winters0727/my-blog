interface CharacterAttrs {
  context: CanvasRenderingContext2D | null;
  canvasWidth: number;
  canvasHeight: number;
  frames: HTMLImageElement[];
  times: number[];
  x: number;
  y: number;
}

export default class Character {
  private context: CanvasRenderingContext2D | null;
  private canvasWidth: number;
  private canvasHeight: number;
  private frames: HTMLImageElement[];
  private currentFrame: HTMLImageElement;
  private frameIndex: number;
  private times: number[];
  private currentTime: number;
  private loopTime: number;
  public x: number;
  public y: number;

  constructor({
    context,
    canvasWidth,
    canvasHeight,
    frames,
    times,
    x,
    y,
  }: CharacterAttrs) {
    this.context = context;
    (this.canvasWidth = canvasWidth), (this.canvasHeight = canvasHeight);
    this.frames = frames;
    this.times = times;
    this.frameIndex = 0;
    this.currentFrame = this.frames[this.frameIndex];
    this.currentTime = 0;
    this.loopTime = this.times.reduce((prev, next) => prev + next);

    this.x = x;
    this.y = y;
  }

  update() {
    if (this.currentTime > this.loopTime) this.currentTime = 0;
    if (
      this.currentTime ===
      this.times
        .slice(0, this.frameIndex + 1)
        .reduce((prev, next) => prev + next)
    )
      ++this.frameIndex;
    if (this.frameIndex === this.frames.length) this.frameIndex = 0;

    this.currentFrame = this.frames[this.frameIndex];
    this.currentTime++;
  }

  draw() {
    if (this.context) {
      this.context.drawImage(
        this.currentFrame,
        0,
        0,
        this.currentFrame.width,
        this.currentFrame.height,
        this.x,
        this.y,
        this.canvasWidth,
        this.canvasHeight
      );
    }
  }
}
