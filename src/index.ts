import express, {Request ,Response, Application} from 'express';
import cors from "cors";
import { productRouter } from './controller/productController';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
});

app.use("/api/product", productRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});