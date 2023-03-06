import { Component } from '@angular/core'
import { ProductService } from '../cositas que pasa/product.service'

@Component({
    selector: 'products',
    template: `
        <h2>Products</h2>
        <div *ngIf="productos.lenght > 0">
            <div *ngFor="let product of products">
                <product [data]="product"></product>                
            </div>
        </div>  
        <div *ngIf="productos.lenght == 0">
            <h2>no hay Products</h2>
        </div> 
    `,
    providers: [ProductService]    
})
export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }

} 
