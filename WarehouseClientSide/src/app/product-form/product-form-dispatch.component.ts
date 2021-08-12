import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { ToastrService } from "ngx-toastr"

@Component({
    selector: 'app-product-form-dispatch',
    templateUrl: './product-form-dispatch.component.html',
    styles: []
})

export class ProductFormDispatchComponent implements OnInit {
    constructor(public service:ProductService,
        private toastr:ToastrService) {}

    ngOnInit(): void {
    }

    dispatchProduct(form:NgForm) {
        this.service.dispatchProduct(form.value.id).subscribe(
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