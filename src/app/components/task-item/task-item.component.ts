import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {Task} from '../../Task'




@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter()
  faTimes = faTimes;
  @Output() onToggleReminder:EventEmitter<Task>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {}


  onDelete(task: Task | undefined){
    console.log(task)
    this.onDeleteTask.emit(task);

  }
  // onDelete(task: Task | undefined){
  //   this.onDelete.emit(task);

  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task);
    
  
  }
}
