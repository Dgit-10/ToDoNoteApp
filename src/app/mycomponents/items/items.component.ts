import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todoentity } from '../todoentity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

  @Input() todo!:todoentity;
  @Output() toDelete : EventEmitter<todoentity> = new EventEmitter(); 
  @Output() toCheck : EventEmitter<todoentity> = new EventEmitter(); 
  @Output() toEdit : EventEmitter<todoentity> = new EventEmitter(); 
  //@Output() toEdit(): EventEmitter<todoentity> = new EventEmitter();

  constructor(){}

  deleteTask(todo: todoentity) {
    this.toDelete.emit(todo);
    console.log("This is Emitting");
  }

  onStrike(item: todoentity) {
    this.toCheck.emit(item);
    console.log("on Strike is Emiting");
  }

  edit(item:todoentity){
    this.toEdit.emit(item);
    console.log("In Edit at Items.ts. Now Emitted");
  }
  
  
}
