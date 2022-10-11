import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {

    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    typename: string;

    @Prop({ default: 10})
    amount: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);