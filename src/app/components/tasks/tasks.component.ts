import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-task'
import {TaskService} from '../../services/task.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})  
export class TasksComponent implements OnInit {
  tasks: Task[]=TASKS; 
  res:any;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: any)=>(this.
      tasks=tasks));
  }
  deleteTask(task:Task){
    this.taskService
    .deleteTasks(task)
    .subscribe(
      () => (this.tasks=this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    // console.log(task.reminder);

  }
  
  addTask(task:Task){
    
    this.taskService.addTask(task).subscribe((task:any)=>(this.
      tasks.push(task)));
    console.log(task);
  }

}
