import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";
import { state } from "@angular/animations";
import { product } from "../Models/UI-interfaces/product.model";


export const selectproductState = createFeatureSelector<ProductState>('product')

export const selectAllProducts=createSelector(
    selectproductState,
    (state:ProductState)=> state.products
)
export const selectError = createSelector(
    selectproductState,
    (state: ProductState) => state.error
  );

  export const selectProductByid=(id:string)=>(
    createSelector(selectAllProducts,(products:product[])=>(
         products.find(p=> p.id === id)
    )
    )
  )