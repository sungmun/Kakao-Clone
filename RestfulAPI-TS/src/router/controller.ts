import { Router, NextFunction, Request, Response } from 'express';

export class Controller<T> {
  service: T;
  router: Router;
  constructor(service: T) {
    this.service = service;
    this.router = Router();
  }

  protected asyncWarp(
    asyncFn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        return await asyncFn(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }
}
