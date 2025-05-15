import { Component, DoCheck } from '@angular/core';
import { ChangeDetectChildComponent } from '../change-detect-child/change-detect-child.component';

@Component({
  selector: 'app-change-detect-parent',
  imports: [ChangeDetectChildComponent],
  templateUrl: './change-detect-parent.component.html',
  styleUrl: './change-detect-parent.component.css'
})
export class ChangeDetectParentComponent  implements DoCheck{
  ngDoCheck(): void {
    console.log("parent change detection")
  }
  count:number =0;

  myArr:number[]=[1,2,3];
  inc(){
    this.count++;
  }
  dec(){
    this.count--;
    this.postNums();
  }
  reset(){
    this.count = 0;
  }

  postNums(){
    this.myArr.push(56);
  }
  
}
