import express from "express";
import Invoice from "../models/Invoice.js";

const router = express.Router();

router.post("/invoice", async (req, res) => {
    try {
        const newInvoice = new Invoice(req.body);
        const savedInvoice = await newInvoice.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/invoice", async (req, res) => {
    try {
        const getInvoice = await Invoice.find();
        res.status(200).json(getInvoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/invoice/:id", async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice)
            return res.status(404).json({ message: "Invoice not found" });
        res.status(200).json(invoice);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.put("/invoice/:id", async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!updatedInvoice)
            return res.status(404).json({ message: "Invoice not found" });
        res.status(200).json(updatedInvoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/invoice/:id", async (req, res) => {
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!deletedInvoice)
            return res.status(404).json({ message: "Invoice not found" });
        res.status(200).json({ message: "Invoice deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
