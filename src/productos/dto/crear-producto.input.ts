import { Field, InputType } from "@nestjs/graphql";
import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";

@InputType()
export class CrearProductoInput{

    @Field()
    @IsNotEmpty()
    nombre: string;

    @Field({nullable: true})
    @IsOptional()
    categoria?: string;

    @Field()
    @IsNumber()
    @IsPositive()
    precio: number;

    @Field()
    @IsInt()
    @IsPositive()
    stock: number;
}