
import{createAction, props} from '@ngrx/store';
import { product } from '../Models/UI-interfaces/product.model';

// action to load products
export const LoadProducts = createAction('[productList compo] load products');


// action to load products -- success

export const LoadProductsSucess = createAction('[productList compo] load products Success', props<{products:product[]}>());



// action to load products -- Failureu
export const LoadProductsFailure = createAction('[productList compo] load products Failure', props<{error:string}>());



//Add product success
export const addProduct = createAction(
    '[Product] Add Product',
    props<{ product: product }>()
  );
export const addProductSuccess = createAction('[create Product compo] create product sucesss', props<{ product: product }>());
export const addProductFailure = createAction(
    '[Product] Add Product Failure',
    props<{ error: string }>()
  );

//delete product success
export const deleteProduct = createAction('[Productlist compo] delete product',props<{id:string}>())
export const deleteProductsucces = createAction('[Productlist compo] delete product sucesss',props<{id:string}>())
export const deleteProductfailure = createAction('[Productlist compo] delete product fail',props<{error:string}>())

//update product success
export const updateProduct = createAction(
    '[Product] Update Product',
    props<{product: product }>()
  );
export const updateProductsuc = createAction('[create compo] update product sucesss',props<{product:product}>())

export const updateProductFailure = createAction(
    '[Product] Update Product Failure',
    props<{ error: string }>()
  );