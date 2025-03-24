import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit, signal } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { product } from '../../Models/UI-interfaces/product.model';
import { ProductService } from '../../services/product.service';
import { error } from 'console'
import { SortingList } from '../../utils/sorting.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgFor } from '@angular/common';
import { appHighliteDirective } from '../../utils/appHighlite.directive';
import { Store, StoreModule } from '@ngrx/store';
import { deleteProduct, LoadProducts } from '../../Product-store/product.actions';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectAllProducts } from '../../Product-store/product.selector';
import { productReducer } from '../../Product-store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../../Product-store/product.effects';
@Component({
  selector: 'app-product-list',
  imports: [MatTableModule,MatButtonModule,MatCardModule, MatIconModule, RouterModule,CommonModule,SortingList,appHighliteDirective,
  CommonModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  destory$ = new Subject<boolean>()
  counter=signal(0);
  displayedColumns: string[] = ['id', 'Product', 'Price', 'Edit' ,'Delete'];
  dataSource!:product[];
  data$! :Observable<product[]>
  constructor(private productS:ProductService, private route:Router, private store:Store){}
  ngOnInit(): void {
    this.store.dispatch(LoadProducts());
    this.data$ = this.store.select(selectAllProducts);
    this.data$.pipe(takeUntil(this.destory$)).subscribe(d=> this.dataSource = [...d])
 //this.getProductsList();
  }




  removeProduct(id:any){
    this.store.dispatch(deleteProduct({id:id}));
    alert("row deleted");
  }

  updateProduct(id:any){
    alert(id)
    this.route.navigate(['/add', {queryParams:{productId:id, update:true}}])
    
  }

  inc(){
    this.counter.update(count => count+1);
  }

  dec(){
    this.counter.update(count => count-1);
  }

  ngDestroy(){
    this.destory$.complete()
  }
}

