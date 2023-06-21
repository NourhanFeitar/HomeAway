import { Component } from '@angular/core';
import { DialogueService } from '../Services/general/dialogue.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
 constructor(public dialgsrv:DialogueService){}
}
