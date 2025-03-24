import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions  from "./product.actions";
import { catchError, map, of, switchMap, take } from "rxjs";
import { ProductService } from "../services/product.service";


@Injectable()
export class ProductEffects {
    private Pservice = inject(ProductService);
    private actions$ = inject(Actions)
    constructor(){}

    loadProduct$ = createEffect(()=>
     this.actions$.pipe(
        ofType(ProductActions.LoadProducts),
        switchMap(()=>
            this.Pservice.getProducts().pipe(
                map(products=>ProductActions.LoadProductsSucess({products})),
                catchError(error=>of(ProductActions.LoadProductsFailure({error})))
            )
        )
     )
    )

    addProduct$ = createEffect(()=>
        this.actions$.pipe(
           ofType(ProductActions.addProduct),
           switchMap((action)=>
               this.Pservice.addProduct(action.product).pipe(
                   map(product=>ProductActions.addProductSuccess({product})),
                   catchError(error=>of(ProductActions.addProductFailure({error})))
               )
           )
        )
       )

       updateProduct$ = createEffect(()=>
        this.actions$.pipe(
           ofType(ProductActions.updateProduct),
           switchMap((action)=>
               this.Pservice.updateproduct(action.product).pipe(
                   map(product=>ProductActions.updateProductsuc({product})),
                   catchError(error=>of(ProductActions.updateProductFailure({error})))
               )
           )
        )
       )


       deleteproduct$ = createEffect(()=>
        this.actions$.pipe(
           ofType(ProductActions.deleteProduct),
           switchMap((action)=>
               this.Pservice.deleteProduct(action.id).pipe(
                   map(id=>ProductActions.deleteProductsucces({id:action.id})),
                   catchError(error=>of(ProductActions.deleteProductfailure({error})))
               )
           )
        )
       )
}