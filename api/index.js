import express from 'express'
import articleroutes from './routes/articles.router.js'
import cookieParser from 'cookie-parser'

export const app = express()

// Error handling  middleware should be at the top of all other middlewares
app.use((err, req, res, next) => {
    const errorMessage = err.message || 'Internal Server Error'
    const errorCode = err.statusCode || 500
    res
        .status(errorCode)
        .json({
            success: false,
            errorMessage
        })
})

app.use(cookieParser())
app.use("/api/v1/article", articleroutes)




app.listen(3000, () => {
    console.log("Server is listening at port 3000");
})