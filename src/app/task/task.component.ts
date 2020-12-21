import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  flow: any;
  a: any;
  userlist: any;
  username: string;
  msg: string = "";
  uname: string = "shawal";
  isvalid: boolean = false;
  f1:any;
  f2:any;
  f3:any;
  
  constructor(private service: TaskService) { }


  ngOnInit() {
    // this.jsonflow();
  }

  jsonflow() {
    this.service.pickdata().subscribe(data => {
      this.flow = data;
    });
  }
  adddata(item) {
    this.a = item;
    return this.a;

  }
  onInputClick(event) {
    console.log(event.target.value);

  }
  onAddCart(event) {
    this.msg = event.target.value + " Added in Cart"
  }
  getinputinfo(my) {
    console.log(my);
  }
  oncreatblock() {
    this.isvalid = true;
  }
  isShowDiv = false;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }



  selectedProduct:string;
  getProductVal(val){
  console.log(val.target.value) 
  this.selectedProduct=val.target.value;
  
  }
  users =[];

  onCreateUser(uuname,uuname2,uuname3){
    this.f1=uuname.value;
    this.f2=uuname3.value;
    this.f3=uuname2.value;
   if(this.f1!=""&&this.f2!=""&&this.f3!="")
  
   {
      this.users.push({

        name:this.f1,
        id:this.f2,
        email:this.f3

       

      });
    
   }else
   {
     alert('Please Fill All fields First');
   }
      uuname.value="";
      uuname3.value="";
      uuname2.value="";
  }
  onRemoveUser(){
    this.users.splice(this.users.length -1)
  }
  RemoveUser(i){
    this.users.splice(i,1)
  }
}
  
