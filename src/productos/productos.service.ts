import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearProductoInput } from './dto/crear-producto.input';
import { EditarProductoInput } from './dto/editar-producto.input';
import { Producto } from './producto.entity';

@Injectable()
export class ProductosService {
    constructor(@InjectRepository(Producto) private productosRepository: Repository<Producto>){}

    async createProducto(createProductoInput: CrearProductoInput): Promise<Producto>{
        const nuevoProducto = this.productosRepository.create(createProductoInput);

        return this.productosRepository.save(nuevoProducto);
    }

    async findAll(): Promise<Producto[]>{
        return this.productosRepository.find();
    }

    async findOne(id: number): Promise<Producto>{
        return this.productosRepository.findOneOrFail(id);
    }

    async updateProducto(id: number, editarProducto: EditarProductoInput): Promise<Producto>{
        const producto = await this.productosRepository.findOne(id);

        if(!producto){
            throw new Error(`No se encontró al producto con el id ${id}`);
        }
        
        Object.assign(producto, editarProducto);
        return this.productosRepository.save(producto);
    }

    async eliminarProducto(id: number): Promise<Producto>{
        const producto = await this.productosRepository.findOne(id);

        if(!producto){
            throw new Error(`No se encontró al producto con el id ${id}`);
        }

        return this.productosRepository.remove(producto);
    }
}
