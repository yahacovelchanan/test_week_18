import express from 'express'
import movieRouter from './function/routes/routes.js'


const app = express();
const port =3006

app.use(express.json());


app.use('/api',movieRouter)




app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})