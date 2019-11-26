import { MyservService } from './../myserv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  details: Object;

  constructor(private s:MyservService) { }

  ngOnInit() {
    this.s.getd().subscribe(res=>{console.log(res);
    this.details=res;}
      
    )
  }

}
