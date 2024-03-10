import { generateError } from "../utils/customErrorGenerator"

export const depressionHandler = (req, res, next) => {
    res.json({
        success: true,
        message: "Api Working !!s"
    })
}

export const anxietyHandler = (req, res, next) => {
    return next(generateError(404, "Not Found Love !!"))
}