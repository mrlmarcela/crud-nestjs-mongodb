import { Schema } from 'mongoose';

export const TestSchema = new Schema({
    description: { type: String, required: true },
    title: { type: String, required: true },
    priority: { type: Number, required: true },
});