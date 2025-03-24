import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
@Input() userData:any;

number!:number;

constructor(private cf:ChangeDetectorRef){}

@Output() sendDataBack = new EventEmitter<any>();

ngOnInit(): void {
 // console.log(this.userData)
}
ngOnChanges(simpleChanges:SimpleChanges){
  //console.log(this.userData, "form parent")
  console.log(simpleChanges)
}

sendDataBackmethod(){
  this.sendDataBack.emit(this.userData);
}


loginC(){

  console.log("login")
  return "Login-component"
}




}
