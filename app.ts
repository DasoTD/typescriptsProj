import express, {Request, Response} from 'express'

const App = express()
App.use(express.json())
App.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000

App.listen(PORT, () => {
    console.log(`server runnning on PORT: ${PORT}`)
})

App.get('/', (req: Request, res:Response) => {
    res.send("Na typescript sure pass maphor")
})

console.log("hi Timmy....");