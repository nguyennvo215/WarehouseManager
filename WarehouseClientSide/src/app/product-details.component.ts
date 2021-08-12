import { Component, OnInit } from "@angular/core";
import { ProductService } from "./shared/product.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styles: []
})

export class ProductDetailComponent implements OnInit {

    constructor(public service: ProductService) {}

    ngOnInit(): void{
        this.service.refreshList();
    }
}