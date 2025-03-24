import { Pipe, PipeTransform } from "@angular/core";
import { product } from "../Models/UI-interfaces/product.model";

@Pipe({
   name:'sort'
})

export class SortingList implements PipeTransform{
    transform(value: product[], ...args: any[]) {
        if(!value){
            return;
        }
    
        let sorted = value.sort((a,b)=>{
             return a.name > b.name? 1:-1
            });
        return sorted;
    }
}