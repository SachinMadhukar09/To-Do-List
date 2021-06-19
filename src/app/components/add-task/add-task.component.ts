import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> =new EventEmitter();
  text!: string;
  day!: string;
  reminder: any;
  description: any;
  showAddTask:boolean | undefined;
  subscription: Subscription;


  constructor(private uiService:UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=>(this.showAddTask=value));
   }

  ngOnInit(): void { }
  onSubmit(){
    if(!this.text){
      alert('Please Add A Task');
      return;
    }
    const newTask ={
      text:this.text,
      day:this.day,
      reminder:this.reminder,
      description:this.description,
    };

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder='';
    this.description='';
    
  }

}
