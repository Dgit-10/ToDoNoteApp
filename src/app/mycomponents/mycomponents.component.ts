// import { Component, OnInit } from '@angular/core';
// import { todoentity } from './todoentity';
// import { CommonModule } from '@angular/common';
// import { ItemsComponent } from "./items/items.component";
// import { AddTodoComponent } from "./add-todo/add-todo.component";
// import { FormsModule } from '@angular/forms';
// import { FilterPipe } from "../filter.pipe";


// @Component({
//   selector: 'app-mycomponents',
//   standalone: true,
//   imports: [CommonModule, ItemsComponent, AddTodoComponent, FormsModule, FilterPipe],
//   templateUrl: './mycomponents.component.html',
//   styleUrl: './mycomponents.component.scss'
// })
// export class MycomponentsComponent implements OnInit {

//   todoList!: todoentity[];
//   currentToDO!: todoentity;

//   searchText: any;
//   constructor() {
//     this.todoList = [{
//       index: 1,
//       title: "Morning Chores",
//       description: "Morning ROutine like breakfast and stuff",
//       complete: true,
//       priority: 3
//     },
//     {
//       index: 2,
//       title: "Office",
//       description: "Check Email, complete the Tasks",
//       complete: true,
//       priority: 2
//     },
//     ]

//   }
//   isEditMode: boolean = false;
//   localitem?: any;
//   ngOnInit(): void {
//     this.localitem = localStorage.getItem("todos");
//     if (this.localitem != null) {
//       this.todoList = JSON.parse(this.localitem) as todoentity[];
//     }
//     else {
//       this.todoList = [];
//     }
//     console.log(this.todoList);
//   }
//   deleteTask(item: todoentity) {
//     console.log(item);

//     const index = this.todoList.indexOf(item);
//     this.todoList.splice(index, 1);
//     localStorage.setItem("todos", JSON.stringify(this.todoList));
//   }


//   todoAdd(item: todoentity) {
//     console.log("Came here!!!");
//     this.todoList.push(item);
//     console.log(this.todoList);
//     localStorage.setItem("todos", JSON.stringify(this.todoList));
//   }

//   toCheckBox(item: todoentity) {
//     const index = this.todoList.indexOf(item);
//     this.todoList[index].complete = !this.todoList[index].complete;
//     localStorage.setItem("todos", JSON.stringify(this.todoList));
//   }
//   // todoAddUpdate(item: todoentity) {
//   //   if (this.isEditMode) {
//   //     console.log("In Edit Mode");
//   //     const index = this.todoList.findIndex(t => t.index === item.index); // Match the exact task
//   //     console.log("Index: ",index);
//   //     this.todoList[index] = item;
//   //     console.log(this.todoList[index]);
//   //     this.isEditMode = false; // Reset edit mode after update
//   //     this.currentToDO = {  // Reset the current todo
//   //       index: Date.now(),
//   //       title: '',
//   //       description: '',
//   //       priority: 1,
//   //       complete: false
//   //     };
//   //   } else {
//   //     this.todoList.push(item);
//   //     console.log(this.todoList);
//   //   }
//   //   localStorage.setItem("todos", JSON.stringify(this.todoList)); // Update local storage
//   // }
//   toEdit(item:todoentity){
//     console.log("Received in Componet!!!");
//     this.currentToDO=item;
//     console.log(this.currentToDO);
//     this.todoAdd(item);
//     console.log("Sent!!!!");
//   }
// }



import { Component, OnInit } from '@angular/core';
import { todoentity } from './todoentity';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from "./items/items.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../filter.pipe";

@Component({
  selector: 'app-mycomponents',
  standalone: true,
  imports: [CommonModule, ItemsComponent, AddTodoComponent, FormsModule, FilterPipe],
  templateUrl: './mycomponents.component.html',
  styleUrls: ['./mycomponents.component.scss']
})
export class MycomponentsComponent implements OnInit {
  todoList: todoentity[] = [];
  taskToEdit: todoentity | null = null; // Task selected for editing
  isEditMode: boolean = false;
  searchText: string = '';

  constructor() {
    // Initialize the list with some sample tasks
    this.todoList = [
      {
        index: 1,
        title: "Morning Chores",
        description: "Morning Routine like breakfast and stuff",
        complete: true,
        priority: 3
      },
      {
        index: 2,
        title: "Office",
        description: "Check Email, complete the Tasks",
        complete: true,
        priority: 2
      },
    ];
  }

  ngOnInit(): void {
    const localitem = localStorage.getItem("todos");
    if (localitem) {
      this.todoList = JSON.parse(localitem) as todoentity[];
    }
  }

  editTask(item: todoentity) {
    this.taskToEdit = { ...item }; 
    this.isEditMode = true; 
  }

  todoAdd(item: todoentity) {
    if (this.isEditMode) {
      const index = this.todoList.findIndex(t => t.index === item.index);
      if (index !== -1) {
        this.todoList[index] = item;
        this.isEditMode = false;
        this.taskToEdit = null;
      }
    } else {
      // Add new task
      this.todoList.push(item);
    }
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  deleteTask(item: todoentity) {
    const index = this.todoList.indexOf(item);
    if (index !== -1) {
      this.todoList.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
  }

  toCheckBox(item: todoentity) {
    const index = this.todoList.indexOf(item);
    if (index !== -1) {
      this.todoList[index].complete = !this.todoList[index].complete;
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    }
  }
}
