import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.ar.snapshot.params.dynamicno);
    // this.id=this.ar.snapshot.params.prodid;
  }

}
