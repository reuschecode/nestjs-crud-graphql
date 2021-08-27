import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { ProductosResolver } from './productos.resolver';
import { ProductosService } from './productos.service';

@Module({
    imports: [TypeOrmModule.forFeature([Producto])],
    providers: [ProductosService, ProductosResolver]
})
export class ProductosModule {}
