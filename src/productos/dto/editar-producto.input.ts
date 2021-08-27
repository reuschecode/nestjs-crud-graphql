import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CrearProductoInput } from "./crear-producto.input";

@InputType()
export class EditarProductoInput extends PartialType(CrearProductoInput){
    @Field(() => Int)
    id: number;
}