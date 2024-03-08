import Character from "./character";

interface AppAttrs {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  frames: HTMLImageElement[];
  times: number[];
}

export default class App {
  private canvas: HTMLCanvasElement;
  private character: Character;
  public width: number;
  public height: number;
  public ctx: CanvasRenderingContext2D | null;
  private dpr: number = window.devicePixelRatio > 1 ? 2 : 1;
  private interval: number = 100;

  constructor({ canvas, width, height, frames, times }: AppAttrs) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");
    this.character = new Character({
      context: this.ctx,
      canvasWidth: this.width,
      canvasHeight: this.height,
      frames,
      times,
      x: 0,
      y: 0,
    });
  }

  init() {
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
  }

  render() {
    let now, delta;
    let then = Date.now();

    const frame = () => {
      requestAnimationFrame(frame);

      now = Date.now();
      delta = now - then;

      if (delta < this.interval) return;

      this.ctx && this.ctx.clearRect(0, 0, this.width, this.height);

      this.character.update();
      this.character.draw();

      then = now - (delta % this.interval);
    };

    requestAnimationFrame(frame);
  }
}
