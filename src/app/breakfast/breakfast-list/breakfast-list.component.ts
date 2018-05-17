import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breakfast-list',
  templateUrl: './breakfast-list.component.html',
  styleUrls: ['./breakfast-list.component.css']
})
export class BreakfastListComponent implements OnInit {
//datajson:[];
datajson:Element[];
booksByStoreID:Element [];
dishselected:string;
filterarray:Array<string>;
searchValue:string;
id:any;
ingredient1:string;
dishtittle:string;
  constructor(private httpclient:HttpClient,) { }

  ngOnInit() {
    this.httpclient.get('https://raw.githubusercontent.com/vidyasagar98/sagar/master/recipe.json?_sm_au_=iVV507bJLJ4nfNDF')
    .subscribe((finalarry:any[])=>{
      if(finalarry.length)
      {
       
        //this.name=finalarry[0].name;
        this.datajson=finalarry;
        this.datajson = this.datajson.filter(
          book => book.dishname === "breakfast");
        //   console.log(this.booksByStoreID[2].ingridents);
      }
    })
  }
  opendilog(data)
  {
   document.getElementById('diving').className="ingredi1";
  // console.log(this.searchValue);
  //console.log(this.ingredient);
   this.filterarray = data.ingridents;
   console.log(this.filterarray)
   this.dishtittle=data.title;
  // console.log(this.filterarray);
    
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
