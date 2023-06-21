import { Component } from '@angular/core';
import { DialogueService } from './Services/general/dialogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialogueService:DialogueService){}
  
  title = 'HomeAway';
}
