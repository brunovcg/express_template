import { NextFunction, Request, Response } from "express";

export default abstract class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static useAppError(
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}
