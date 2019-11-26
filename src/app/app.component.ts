import { MyservService } from './myserv.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  LoginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  MOVE()
  {
    this.getdata();
    this.r.navigate(['/toys']);
  }
sub()
{
  console.log(this.LoginForm.value);
  this.s.send(this.LoginForm.value).subscribe(res=>{console.log(res);
  localStorage.setItem("tkn",res['authorization']);
 
  });
}
logout()
{
  localStorage.removeItem("tkn");
}
  title = 'angular 8';
 today=new Date();
 months1 = ["January", "February", "March", "April", "Maymonth", "Junemonth",
 "Julymonth", "Augustmonth", "September", "October", "November", "December"];
  a=20;
  b=25;
  num1=12;
  num2=878;
  pri:any;
  rat:any;
  term:any;
  _emi:any;
  vinay:number;
  btntxt:any="Show";
  status:boolean=false;
  txt1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aut corporis odit aliquam nemo maxime aperiam, modi, possimus quia numquam neque assumenda voluptatem reprehenderit adipisci similique molestias voluptatibus ad aliquid";

  colors:string[]=["blue", "red", "black", "brown", "grey", "ash", "pink","violet"];
  emp:object[]=[
    {name:"prashanth", id:2019001,design:'Trainee', salary:45000,tech:"Angular",city:"warangal"},
    {name:"Sravani", id:2019023,design:'Trainee', salary:5000,tech:"Java-SAP",city:"hyderabad"},
    {name:"RAdhika", id:2019013,design:'Ass. Soft', salary:120000,tech:"Devops",city:"karimnagar"},
    {name:"Shanthi", id:2019273,design:'Deirector', salary:1500000,tech:"Management",city:"Medak"},
    {name:"Roja Mallelu", id:2019642,design:'HR-Manager', salary:30000,tech:"HR-ops",city:"hyderabad"},
    
  ];
  
  days:string[]= ['mon','tue','wed','thu','fri','sat','sun'];
  months:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
  marks=[32,65,23,54,76,93];


  url1: string='../assets/images/images2.jpg';
  temp;

  opt(a,b){
    console.log(a+"  "+b);
  }





  changeimg(){
    var num1= Math.round(Math.random()*4);
    this.url1 ='../assets/images/images'+num1+'.jpg';
    console.log(num1);
  }
  showresult(){
    
   return this.num1+ this.num2; 
  }


emi(){
//  var pri= prompt("enter principle amount");
//  var rat= prompt("enter rate amount");
//  var term= prompt("enter term amount"); 
  // this.pri= Number(pri);
  // this.rat=(Number(rat)/12)/100;
  // this.term=Number(term);


  // this._emi = (this.pri*this.rat*Math.pow((1+this.rat),this.term))/((Math.pow(1+this.rat,this.term))-1);
  // console.log("emi is :"+this._emi);
}

likes(){

}

  
  

  
  avgme(){
    var r=0;
    for(var i=0; i < this.months.length;i++)
    {
      r =this.months[i]+r;
    }

    return r/this.months.length;
    
  }
  public addme(){
    var c = this.a+ this.b;
    return c;
  }
  public name: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio, sit vero eaque harum non quisquam exercitationem vel eligendi veniam rem? Corrupti modi voluptate vel consequatur possimus debitis fuga veritatis.";

  ngOnInit() {
    var b=1234;
    var s="typescript";
// this.temp="welcome to "+this.title;
this.temp=`welcome to ${this.title} and b=${b} and welcome to ${s}`;

    console.log('oninit');  
    this.emi();
    this.vinay=Math.round(Math.random()*100);
  }

  constructor (private s:MyservService ,private fb:FormBuilder,private r:Router) {
   
   
    this.name= 'vinay';
    this.addme();
    console.log('constructor');
    // window.alert(this.addme());
    this.name ='prashanth';
    
  }

deletemeth()
{
  this.s.deldata().subscribe(res=>console.log(res));
}

  
  getdata()
  {
    this.s.getd().subscribe(res=>{console.log(res)})
  }
  
  


}
