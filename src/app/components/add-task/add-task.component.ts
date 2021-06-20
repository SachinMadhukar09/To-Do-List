import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
// import { IAngularMyDpOptions } from 'angular-mydatepicker';

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

  // myDatePickerOptions:IAngularMyDpOptions={
  //   stylesData:{
  //     styles:`
  //             .myDpIconLeftArrow,
  //             .myDpIconRightArrow{
  //               color:red;
  //             }
  //         `
  //   }
  // }
  


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
    
    // Using Reactive Form

    //  const newTask = new FormControl{
    //       text:this.text,
    //       day:this.day,
    //       reminder:this.reminder,
    //       description:this.description,
    //  };
  //   this.onAddTask.emit(newTask);

  //   this.text='';
  //   this.day='';
  //   this.reminder='';
  //   this.description='';
    
  // }

// Normal Form

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
