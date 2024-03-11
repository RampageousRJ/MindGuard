import { fetchDepressionArticles } from "../scrapers/depression_scraper.js"
import { generateError } from "../utils/customErrorGenerator.js"

export const depressionHandler = async(req, res, next) => {
    await fetchDepressionArticles()
    res.json({
        success: true,
        message: "Api Working !!s"
    })
}

export const anxietyHandler = (req, res, next) => {
    try{
        return next(generateError(401, "Not Found Love !!"))
    }
    catch (error){
    }
}