import Character from "./character";

export default class App {
  private canvas: HTMLCanvasElement;
  private character: Character;
  public width: number;
  public height: number;
  public ctx: CanvasRenderingContext2D | null;
  static dpr: number = window.devicePixelRatio > 1 ? 2 : 1;
  static interval: number = 100;

  constructor({
    canvas,
    width,
    height,
    frames,
    times,
  }: {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    frames: HTMLImageElement[];
    times: number[];
  }) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");
    this.character = new Character({
      context: this.ctx,
      frames,
      times,
      x: 0,
      y: 0,
    });
  }

  render() {
    let now, delta;
    let then = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);

      now = Date.now();
      delta = now - then;

      if (delta < App.interval) return;

      this.ctx?.clearRect(0, 0, this.width, this.height);

      this.character.update();
      this.character.draw();

      then = now - (delta % App.interval);
    };

    requestAnimationFrame(frame);
  }
}
