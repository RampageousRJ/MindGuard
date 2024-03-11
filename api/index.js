import express from 'express'
import articleroutes from './routes/articles.router.js'
import cookieParser from 'cookie-parser'

export const app = express()

app.use(cookieParser())
app.use(express.json())

// Handle Routes
app.use("/api/v1/article", articleroutes)

// Error handling  middleware should be after all routes
app.use((err, req, res, next) => {
    const errorMessage = err.message || 'Internal Server Error'
    const errorCode = err.statusCode || 500
    res
        .status(errorCode)
        .json({
            success: false,
            message: errorMessage
        })
})

app.listen(3000, () => {
    console.log("Server is listening at port 3000");
})