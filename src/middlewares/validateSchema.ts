import { NextFunction, Request, Response } from "express";

export function validateSchema(schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.validate(req.body);
    if (result.error) {
      res.status(422).send(result.error.details[0].message);
    } else {
      next();
    }
  };
}
