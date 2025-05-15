import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged, Observable, pipe, switchMap } from 'rxjs';
import { DateFormat } from '../../utils/date-format.pipe';

@Component({
  selector: 'app-posts',
  imports: [MatInputModule,ReactiveFormsModule,DateFormat],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
 posts: string[] = [];
 result:string[]=[]
 searchPosts: FormControl = new FormControl('');
 constructor(){}
 ngOnInit(): void {
   this.posts=["Sravan", 'srujana', 'yashna','puppy', 'chintu'];
   this.result=[...this.posts]
   this.searchPosts.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe(val=>{
    this.result=[];
    this.result= this.posts.filter(v=> v=== val)
    if(val === ''){
      this.result= this.posts;
    }
   })
 }

}
