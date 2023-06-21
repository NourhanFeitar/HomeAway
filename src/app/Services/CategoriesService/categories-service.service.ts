import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  getCategories() { 
    return[
      {
        imageSrc:"beach.png",
        label:"Beachfront"
      },
      {
        imageSrc: "beach.png",
        label:"Beachfront"
      },
      {
        imageSrc:"beach.png",
        label:"Beachfront"
      },
      {
        imageSrc: "beach.png",
        label:"Beachfront"
      },
      {
        imageSrc: "beach.png",
        label:"Beachfront"
      }
    ]
  }
}
