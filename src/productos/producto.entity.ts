import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Producto{

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    nombre: string;

    @Column({nullable: true})
    @Field({nullable: true })
    categoria?: string;

    @Column()
    @Field()
    precio: number;

    @Column()
    @Field()
    stock: number;
}