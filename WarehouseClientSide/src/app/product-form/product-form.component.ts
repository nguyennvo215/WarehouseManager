import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { ToastrService } from "ngx-toastr"

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styles: []
})

export class ProductFormComponent implements OnInit {
    constructor(public service:ProductService,
        private toastr:ToastrService) {}

    ngOnInit(): void {
    }

    onSubmit(form:NgForm) {
        this.service.postProduct().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Success');
            },
            err => {console.log(err); this.toastr.error(err.error);}
        );
    }

    resetForm(form:NgForm) {
        form.form.reset();
        this.service.formData = new Product();
        this.service.refreshList();
    }
}