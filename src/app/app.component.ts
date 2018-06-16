import { Component, OnInit } from '@angular/core';
import { TodoItem } from './to-do-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    toDoItemList: TodoItem[] = [];
    //  listOfItemsForStorage: TodoItem [] = [];

    addNewItem(item: TodoItem): void {
        this.toDoItemList.push(item);
        localStorage.setItem('toDoList', JSON.stringify(this.toDoItemList));
        /*
        // LOCAL STORIGE
        if (!localStorage.getItem('toDoList')) {
          localStorage.setItem('toDoList', JSON.stringify(this.toDoItemList));
         } else {
          const items: TodoItem[] = JSON.parse(localStorage.getItem('toDoList'));
          items.push(item);
          localStorage.setItem('toDoList', JSON.stringify(items));
        }*/
        console.log(localStorage.getItem('toDoList'));
    }

    ngOnInit() {
        this.toDoItemList = JSON.parse(localStorage.getItem(('toDoList')));

    }

    set localStor(list) {
        localStorage.setItem('toDoList', JSON.stringify(list));
    }

    get localStor() {
        return JSON.parse(localStorage.getItem('toDoList'));
    }

    onEdit(editedToDOItem: TodoItem) {
        let list = this.localStor;

        list = list.map(item => {
            return item.id === editedToDOItem.id ? editedToDOItem : item;        } );

        this.localStor = list;

        this.toDoItemList = list;
    }

    public onRemove(id: number): void {
        this.toDoItemList = this.toDoItemList.filter((item: TodoItem) => {
            return item.id !== id;
        });
        let oldItemList: TodoItem[] = JSON.parse(localStorage.getItem('toDoList'));
        oldItemList = oldItemList.filter((item: TodoItem) => {
            return item.id !== id;
        });
        localStorage.setItem('toDoList', JSON.stringify(oldItemList));
    }
}
