import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { TodoItem } from '../to-do-item';

@Component({
    selector: 'app-create-item',
    templateUrl: './create-item.component.html',
    styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

   @Output() addingItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

   title = '';
   selectedPriority: number;

   newItem: TodoItem;

   constructor() { }

    ngOnInit() {
    }

     createTitle(): void {
         if ((this.title) && (this.selectedPriority)) {
            document.getElementById('validation').innerText = '';
             this.newItem = new TodoItem(this.title, this.selectedPriority);
             this.addingItem.emit(this.newItem);
             this.title = '';
             this.selectedPriority = 1;
         } else if (!this.title) {
            document.getElementById('validation').innerText = 'Enter your toDO item!!!';
        } else if (!this.selectedPriority) {
            document.getElementById('validation').innerText = 'Choose priority of item!!!';
       }

     }

     clearInfo(): void {
        this.title = '';
        this.selectedPriority = 0;
    }
}
