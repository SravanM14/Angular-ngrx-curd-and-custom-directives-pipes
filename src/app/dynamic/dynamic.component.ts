import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dynamic',
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit{
productForm!:FormGroup;
products!:FormArray;
constructor(private fb:FormBuilder){}
ngOnInit(){
 this.productForm = this.fb.group({
  products:new FormArray([])
 })
}

createForm(){
  return this.fb.group({
    name:[''],
    category:[''],
    price:[],
    instock:[]
  })
}




addProduct(){
  this.products = this.productForm.get('products') as FormArray
  this.products.push(this.createForm());
}

remove(i:any){
  this.products.removeAt(i);
}

save(){
  console.log(this.productForm.value, "value")
}

}
