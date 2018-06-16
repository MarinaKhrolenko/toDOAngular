import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TodoItem } from '../to-do-item';



@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {


  @Input() toDoItemList: TodoItem[];
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();
  @Output() edited: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit() {
   }

  onRemove(id: number): void {
    this.removed.emit(id);

  /*  this.toDoItemList = this.toDoItemList.filter((item: TodoItem) => {
      return item.id !== id;
    });*/
  }
  onEdit( editedToDOItem: TodoItem): void {
       this.edited.emit(editedToDOItem);
  }
}
