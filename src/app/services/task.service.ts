import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Task} from '../Task';
import { TASKS } from '../mock-task';
// import {TASKS} from '../mock-task'

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    // This is for when u r fetching thw data from localstorage like in this mock-test.ts
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }
  // deleteTasks(task:Task){
      // delete(this.Task=this.data.filter(task=>task !== task)
      // );
    // }

  deleteTasks(task:Task):Observable<Task>{
    console.log("")
    // const url=`this.apiUrl/${task.id}`; Error
    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl , task ,);
  }

}
