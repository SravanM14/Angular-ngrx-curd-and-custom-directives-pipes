import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct, addProductSuccess, updateProduct } from '../../Product-store/product.actions';
import { product } from '../../Models/UI-interfaces/product.model';
import { selectProductByid } from '../../Product-store/product.selector';
@Component({
  selector: 'app-creat-product',
  imports: [MatCardModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './creat-product.component.html',
  styleUrl: './creat-product.component.css',
  providers:[ProductService]
})
export class CreatProductComponent implements OnInit {
  ProductForm!: FormGroup;
  updateId!:string;
  buttonText:string = "Add"
  constructor(private fb: FormBuilder, private productS: ProductService, private route:Router,private rounteActive:ActivatedRoute, private store:Store) { }
  ngOnInit(): void {
    this.createForm();
    this.rounteActive.queryParams.subscribe(res=>{
     this.updateId = res['id'];
    if(this.updateId){
      this.buttonText="Update"
    }
    this.getProductDetails(this.updateId)
    })
  }


  getProductDetails(id:string){
   this.store.select(selectProductByid(id)).subscribe(res=>{console.log(res, "+++>>")
      this.ProductForm.get('product')?.setValue(res?.name);
      this.ProductForm.get('price')?.setValue(res?.price);
    })
  }


  createForm() {
    this.ProductForm = this.fb.group({
      product: ['', Validators.required],
      price: [null, [Validators.required]]
    })
  }

  SaveProduct() {
    const data = {
      name: this.ProductForm.value.product,
      price: this.ProductForm.value.price
    } as product;
    if(this.ProductForm.valid)
    if(!this.updateId){
    // this.productS.addProduct(data).subscribe(res => {
    //   alert("record submitted !!!!")
    //   this.route.navigate(['list'])
    // })
    this.store.dispatch(addProduct({product:data}))
    alert("record submitted !!!!")
    this.route.navigate(['list'])
  }else{
    
    // this.productS.updateproduct(this.updateId, data).subscribe(res => {
    //   alert("record updated !!!!")
    //   this.route.navigate(['list'])
    // })
    this.store.dispatch(updateProduct({product:{...data ,id:this.updateId}}))
       alert("record updated !!!!")
      this.route.navigate(['list'])
  }
  }

}
