import {errorMessages} from "./errorMessages";

export class ApiError extends Error{
    status: number

    constructor(status: number, message: string) {
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message: string) {
        return new ApiError(400, message)
    }

    static forbidden(message?: string) {
        return new ApiError(401, message ?? errorMessages.forbidden)
    }

    static internal(message?: string) {
        return new ApiError(500, message ?? errorMessages.serverError)
    }
}