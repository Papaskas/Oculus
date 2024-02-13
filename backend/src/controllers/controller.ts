import { Request, Response } from 'express';


export default class Controller {
  constructor(
    protected readonly req: Request,
    protected readonly res: Response,
    private readonly middlewares?: Array<() => void>,
  ) {
    this.middleware();
    this.main();
  }

  private middleware() {
    if (this.middlewares !== undefined)
      for (const el of this.middlewares) el()
  }

  protected main() {}
}
