export class ServerError extends Error {
  constructor(message = "Server Error.") {
    super(message);
    this.name = "ServerError";
  }
}
