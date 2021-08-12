import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { ToastrService } from "ngx-toastr"

@Component({
    selector: 'app-product-form-capa',
    templateUrl: './product-form-capa.component.html',
    styles: []
})

export class ProductFormCapacityComponent implements OnInit {
    constructor(public service:ProductService,
        private toastr:ToastrService) {}

    ngOnInit(): void {
    }

    setCap(form:NgForm) {
        this.service.setCap(form.value.id).subscribe(
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