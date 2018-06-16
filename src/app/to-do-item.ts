import {  PriorityOfItem } from './priority-of-item.enum';

export class TodoItem {

    constructor(public title: string, priority: PriorityOfItem) {
        this.id = +new Date();
        this.priority = priority;

    }
    id: number;
    priority: PriorityOfItem;
    done: boolean;
}
