export class ConflictError extends Error {
  constructor(message = "Conflict with current state of target resource.") {
    super(message);
    this.name = "ConflictError";
  }
}
