import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { todoentity } from '../todoentity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnChanges {
  @Input() taskToEdit: todoentity | null = null; 
  @Output() todoAdd: EventEmitter<todoentity> = new EventEmitter();
  
  // Form fields bound to the UI
  todo: todoentity = {
    index: Date.now(),
    title: '',
    description: '',
    priority: 1,
    complete: false
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.todo = { ...this.taskToEdit }; 
    }
  }

  onSubmit() {
    console.log("Submit pressed");
    this.todoAdd.emit(this.todo); 
    this.resetForm();
  }

  resetForm() {
    // Clear the form and reset fields
    this.todo = {
      index: Date.now(),
      title: '',
      description: '',
      priority: 1,
      complete: false
    };
  }
}
