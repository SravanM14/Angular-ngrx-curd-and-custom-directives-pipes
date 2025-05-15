import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-change-detect-child',
  imports: [],
  templateUrl: './change-detect-child.component.html',
  styleUrl: './change-detect-child.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectChildComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    console.log("child component checking")
  }
  @Input()
  counter!: number;
  
  @Input()
  nums!: number[];

  ngOnChanges(){
    console.log(this.counter)
  }
  ngOnInit(): void {
    console.log(this.counter)
  }
  
}
