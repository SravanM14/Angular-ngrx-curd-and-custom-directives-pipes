import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HoverColorDirecctive } from '../../utils/Hovercolor.directive';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { nonNumbersValidator } from '../../utils/nonNumbersValidator';

@Component({
  selector: 'app-login',
  imports: [HoverColorDirecctive,FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  isSubmitted:boolean=false;
  MyForm!:FormGroup;
  @Input()
  area!: number;

  @Output() h = new EventEmitter<number>()

  constructor(private serv:ProductService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.serv?.count.subscribe(v=>console.log(v,"from service"))
    this.MyForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      age:['',[Validators.required, nonNumbersValidator]],
      skills:this.fb.array([])
    })
  }

   get skills(){
   return this.MyForm.get('skills') as FormArray;
   }

   
   newSkill(){
      return this.fb.group({
        skill:'',
        experience:['',[Validators.required, nonNumbersValidator]]
      })
   }


   addSkill(){
    this.skills.push(this.newSkill());
   }

   remove(i:number){
    this.skills.removeAt(i);
   }
  setHeight(){
    this.h.emit(500);
    console.log("clicked")
  }

  Submit(){

    console.log(this.MyForm.value);
  }
}
