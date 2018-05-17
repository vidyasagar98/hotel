import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diabetic-list',
  templateUrl: './diabetic-list.component.html',
  styleUrls: ['./diabetic-list.component.css']
})
export class DiabeticListComponent implements OnInit {
  datajson:Element[];
  booksByStoreID:Element [];
  dishselected:string;
  filterarray:Array<string>;
  ingredient1:string;
  constructor(private httpclient:HttpClient,) { }

  ngOnInit() {
    this.httpclient.get('https://raw.githubusercontent.com/vidyasagar98/sagar/master/recipe.json?_sm_au_=iVVHnDM7S0wqSZRR')
    .subscribe((finalarry:any[])=>{
      if(finalarry.length)
      {
       
        //this.name=finalarry[0].name;
        this.datajson=finalarry;
        this.datajson = this.datajson.filter(
          book => book.dishname === "daibetic");
        //   console.log(this.booksByStoreID[2].ingridents);
      }
    })
  }
  opendilog(data)
  {
   alert("Hi")
   document.getElementById('diving').className="ingredi1";
   this.filterarray = data.ingridents;
   console.log(this.filterarray);
    
  }
  postingredients()
  {
    // alert("Hi")
    // console.log(this.ingredient1);
    // console.log(this.dishtittle);
    this.filterarray.push(this.ingredient1);
    console.log(this.filterarray);
  }
}
export interface Element {
  title: string;
  image: string;
  ingridents: Array<string>;
  dishname: string;
  class:string;
}
