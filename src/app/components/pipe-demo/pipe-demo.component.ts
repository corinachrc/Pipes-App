
import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'pipe-demo-component',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  form;
  type: any;
  error = false;
  errorMsg=0;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      choice: "",
      text: "",
      isSubmitted: false
    })
  }

  get option(): any {
    return this.form.value.choice
  }

  get text(): any {
    return this.form.value.text
  }

checkIfAble(){
  if(this.text==''){
    this.error=true
    this.errorMsg=1

  }else
  if((this.option=="date")&&(Number.isNaN(Date.parse(this.text)))){
    this.error=true
    this.errorMsg=2

  }else
  if((this.option=="currency")&&(Number.isNaN(parseFloat(this.text)))){
    this.error=true
    this.errorMsg=3

  }else
  {
  this.error=false
  }
}

  onSubmit() {
    this.form.value.isSubmitted = true
    this.checkIfAble();
    if(this.error==true){
      return this.error
    }else{
      return this.text
    }








  }
}


