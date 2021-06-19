import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input()
  color!: string;

  showAddTask:boolean | undefined;
  subscription:Subscription | undefined;
  // private showAddTask:boolean=false;
  // private subject = new Subject<any>();

  // here i used a evenemitter which is a term of event binding

  @Output() btnclick = new EventEmitter()
  btnClick: any;


  constructor(private uiService:UiService) {
    this.subscription=this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask=value));
   }

  ngOnInit(): void {}
  
  onClick(){
    console.log('work')
    // this.btnClick.emit();
    // this.showAddTask=!this.showAddTask;
    // this.subject.next(this.showAddTask)
    this.uiService.toggleAddTask();

    // below line gives Error
    // this.btnClick.emit(); Error


    
    
  }
  toggleAddTask(){
    console.log('toggle');
  }


}
function value(value: any): Subscription | undefined {
  throw new Error('Function not implemented.');
}

