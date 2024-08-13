import { Document } from "mongoose";

export class Test extends Document {
    description: String;
    title: String;
    priority: Number;
}