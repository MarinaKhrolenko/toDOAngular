import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  edit = false;
@Input() item: TodoItem;
 @Output() removed: EventEmitter<number> = new EventEmitter<number>();
 @Output() edited: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {

  }

  public done(item: TodoItem) {
    item.done = !item.done;
  }
  public onDelete(id: number): void {
    this.removed.emit(id);
  }
  public onEdit(id: number): void {
  this.edit = true;
  }
  public onSaveEdit(title: string): void {
    this.edit = false;
   const editedItem: TodoItem = new TodoItem(title, this.item.priority);
    editedItem.id = this.item.id;
    this.edited.emit(editedItem);
  }
}
