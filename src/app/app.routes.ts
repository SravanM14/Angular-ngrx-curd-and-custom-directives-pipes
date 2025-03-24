import { Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { CreatProductComponent } from './Products/creat-product/creat-product.component';
import { FlexComponent } from './CSS-Prac/flex/flex.component';
import { HostComponent } from './host/host.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RegisterComponent } from './Admin/Register/register.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/host', pathMatch: 'full' },
    {path:'list', component:ProductListComponent, title:"PRODUCT LIST",},
    {path:'add', component:CreatProductComponent, title:"ADD PRODUCT"},
    {path:'flex', component:FlexComponent, title:"Flex layout"},
    {path:'host', component:HostComponent, title:"Host"},
    {path:'dynamic-forms', component:DynamicComponent, title:'forms'},
    {path:'register', component:RegisterComponent, title:'Register'}
];
