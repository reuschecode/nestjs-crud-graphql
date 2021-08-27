import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CrearProductoInput } from './dto/crear-producto.input';
import { EditarProductoInput } from './dto/editar-producto.input';
import { Producto } from './producto.entity';
import { ProductosService } from './productos.service';

@Resolver(of => Producto)
export class ProductosResolver {
    constructor(private productosServicio: ProductosService){ }

    @Query(returns => Producto)
    getProducto(@Args('id', {type: () => Int}) id: number): Promise<Producto>{
        return this.productosServicio.findOne(id);
    }

    @Query(returns => [Producto])
    productos(): Promise<Producto[]>{
        return this.productosServicio.findAll();
    }

    @Mutation(returns => Producto)
    crearProducto(@Args('crearProductoInput') crearProductoInput: CrearProductoInput):Promise<Producto>{
        return this.productosServicio.createProducto(crearProductoInput);
    }

    @Mutation(returns => Producto)
    editarProducto(@Args('editarProductoInput') editarProductoInput: EditarProductoInput): Promise<Producto>{
        return this.productosServicio.updateProducto(editarProductoInput.id, editarProductoInput);
    }

    @Mutation(returns => Producto)
    eliminarProducto(@Args('id', {type: () => Int}) id: number): Promise<Producto>{
        return this.productosServicio.eliminarProducto(id);
    }
}
