import mongoose from "mongoose";

// Define the schema for the form data
const invoiceSchema = new mongoose.Schema({
    who: {
        type: String,
        required: true,
    },
    bill: {
        type: String,
        required: true,
    },
    ship: {
        type: String,
        required: true,
    },
    date: {
        type: String, // You could also use Date type if the value is a date
        required: true,
    },
    pan: {
        type: String,
        required: true,
    },
    orderDate: {
        type: String, // Same as above, could be Date type
        required: true,
    },
    orderNo: {
        type: String,
        required: true,
    },
    GstNo: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
    Qty: {
        type: Number, // For quantity, it's typically a number
        required: true,
    },
    Net: {
        type: Number, // Net amount should also be a number
        required: true,
    },
    taxRate: {
        type: Number, // Tax rate should be a number (percentage)
        required: true,
    },
    taxType: {
        type: String,
        required: true,
    },
    taxAmount: {
        type: Number, // Tax amount should be a number
        required: true,
    },
    total: {
        type: Number, // Total amount should be a number
        required: true,
    },
});

// Create a model based on the schema
const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;
