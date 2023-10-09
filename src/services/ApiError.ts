export class ApiError extends Error {
  public code: number | string;

  public constructor(code: number | string, message?: string) {
    super(message);
    this.code = code;
  }
}
