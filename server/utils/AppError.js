class Error extends AppError () {
  constructor(status, statusCode) {
    super(message)

    this.status = statusCode
    this.statusCode = statusCode.startsWithh('')
  }
}