import { Routes } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { CreatProductComponent } from './Products/creat-product/creat-product.component';
import { FlexComponent } from './CSS-Prac/flex/flex.component';
import { HostComponent } from './host/host.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RegisterComponent } from './Admin/Register/register.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { ChangeDetectParentComponent } from './feature/change-detect-parent/change-detect-parent.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/flex', pathMatch: 'full' },
     {path:'list', loadComponent:()=>import('./Products/product-list/product-list.component').then(c=>c.ProductListComponent)},
    // {path:'add', component:CreatProductComponent, title:"ADD PRODUCT"},
    {path:'flex',
    loadComponent:()=>import('./CSS-Prac/flex/flex.component').then(c=>c.FlexComponent)
    },
    // {path:'host', component:HostComponent, title:"Host"},
    // {path:'dynamic-forms', component:DynamicComponent, title:'forms'},
     {path:'register', loadComponent:()=> import('./Admin/Register/register.component').then(c=>c.RegisterComponent)}
    // {path:'post', component:PostsComponent, title:"POST | titles"},
    // {path:'change-det', component:ChangeDetectParentComponent}
];
