import { Component, OnInit } from '@angular/core';
import { property } from '../Models/property';
import { filterService } from '../Services/filterService';
import { DialogModule } from 'primeng/dialog';
import { DialogueService } from '../Services/general/dialogue.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent  {

properties:property[]=[];
filteredProperties:property[]=[];
//Get All Properties From Database into the above array

constructor(public fService:filterService, public dialogueService:DialogueService){}
filterProperty(type:string){

  this.fService.GetPropertyFilter(type).subscribe(data=>{
  this.properties=data;
  })
}


}
