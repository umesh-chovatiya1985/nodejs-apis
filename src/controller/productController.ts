import express, { Request, Response } from "express";
import { products } from "../entity/productCollection";
import { baseProducts, product } from "../entity/products";
import * as productService from "../service/products/products.service";

export const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
    try {
      const products: products[] = await productService.findAll();
  
      res.status(200).send(products);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});
  
productRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);  
    try {
      const product: product = await productService.find(id);  
      if (product) {
        return res.status(200).send(product);
      }  
      res.status(404).send("item not found");
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});

productRouter.get("/:limit/:pageNo", async (req: Request, res: Response) => {
    const limit: number = parseInt(req.params.limit, 10);
    const pageNo: number = parseInt(req.params.pageNo, 10);  
    try {
      const product: products[] = await productService.findByPage(pageNo, limit);  
      if (product) {
        return res.status(200).send(product);
      }
      res.status(404).send("items not found");
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});
  
productRouter.post("/", async (req: Request, res: Response) => {
    try {
      const products: baseProducts = req.body;
  
      const newProduct = await productService.create(products);
  
      res.status(201).json(newProduct);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});

productRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const itemUpdate: product = req.body;
  
      const existingItem: product = await productService.find(id);
  
      if (existingItem) {
        const updatedItem = await productService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }
  
      const newItem = await productService.create(itemUpdate);
  
      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});
  
productRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await productService.remove(id);
  
      res.sendStatus(204);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
});