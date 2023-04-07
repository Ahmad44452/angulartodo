import { Component } from '@angular/core';

type TodoItemType = {
  id: number;
  content: string;
  isCompleted: boolean;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  newItemContent: string = '';
  todoItems: TodoItemType[] = [];

  toggleItemCompleted(item: TodoItemType): void {
    item.isCompleted = !item.isCompleted;
  }

  addTask(e: Event) {
    e.preventDefault();
    const newTask: TodoItemType = {
      id: parseInt(
        Date.now().toString(36) + Math.random().toString(36).substring(2)
      ),
      content: this.newItemContent,
      isCompleted: false,
    };
    this.todoItems.push(newTask);
    this.newItemContent = '';
  }

  deleteTask(index: number) {
    this.todoItems.splice(index, 1);
  }
}
