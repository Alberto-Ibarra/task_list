import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {
  taskList = ['walk dog', 'work out']
  newTask: string = ''
  isChecked: boolean = true
  checkedTask: boolean[] = []
  
  addTask(){
    this.taskList.push(this.newTask)
    this.newTask= ''
    this.checkedTask.push(false)
    
  }

  checked(index: number){
    this.checkedTask[index] = !this.checkedTask[index]
  }
}
