import express, {Request, Response} from 'express'

const App = express()
const PORT = process.env.PORT || 3000

App.listen(PORT, () => {
    console.log(`server runnning on PORT: ${PORT}`)
})

App.get('/', (req: Request, res:Response) => {
    res.send("Na typescript sure pass maphor")
})