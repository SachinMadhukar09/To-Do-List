import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title :string = 'TO DO LIST';
  showAddTask: boolean=false;
  subscription!: Subscription;


  constructor(private uiService:UiService,private router:Router) { 
    this.subscription = this.uiService.onToggle()
    .subscribe((value)=>(this.showAddTask=value));
  }

  ngOnInit(): void {}

  
  toggleAddTask(){
    console.log('sachin')
    this.uiService.toggleAddTask();
  }
  onClick(){
    console.log('working')
    this.onClick();
  }
  hasRoute(route:string){
    return this.router.url===route;
  }
  

}
