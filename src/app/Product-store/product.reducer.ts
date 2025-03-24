import { createReducer, on } from "@ngrx/store";
import { product } from "../Models/UI-interfaces/product.model";
import * as ProductActions  from "./product.actions";


export interface ProductState{
    products:product[];
    error:string | null
}

export const initialState:ProductState ={
    products:[],
    error:null
}

export const productReducer = createReducer(
    initialState, 
    on(ProductActions.LoadProducts, state =>({...state})),
    on(ProductActions.LoadProductsSucess, (state,{products})=>({...state, products})),
    on(ProductActions.LoadProductsFailure, (state, {error})=>({...state,error})),
    on(ProductActions.addProductSuccess, (state, { product }) => ({
        ...state,
        products: [...state.products, product]
      })),
    on(ProductActions.updateProductsuc, (state , { product})=>({
        ...state,
        products:state.products.map(p=>p.id === product.id? product: p)
    })),
    on(ProductActions.deleteProductsucces, (state,{id})=>({
        ...state,
        products:state.products.filter(p=> p.id !== id)
    }))

)