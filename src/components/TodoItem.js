import { Component, observable } from 'weivjs'
import TodoTextInput from './TodoTextInput'

@Component({
  template: `
  <li @bind:class="{completed: todo.completed, editing: this.editing}">
    <todo-text-input @if="editing"
                     text="todo.text"
                     editing="editing"
                     @on:save="handleSave(todo.id, text)" />
    <div class="view" @if="!editing">
      <input class="toggle"
              type="checkbox"
              @bind:checked="todo.completed"
              onchange="handleToogle" />
      <label ondoubleclick="handleDoubleClick">
        {{todo.text}} {{todo.other && todo.other.completed ? 'Yes!' : ' . '}}
      </label>
      <button class="destroy"
              onclick="handleDelete" />
    </div>
  </li>
  `,
  props: {
    store: { type: 'object', required: true },
    todo: { type: 'object', required: true },
  },
  components: {
    'todo-text-input': TodoTextInput
  }
})
class TodoItem {
  @observable editing = false;

  handleDoubleClick() {
    this.editing = true
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.store.deleteTodo(id)
    } else {
      this.store.editTodo(id, text)
    }
    this.editing = false
  }

  handleToggle() {
    this.store.completeTodo(this.todo.id)
  }

  handleDelete() {
    this.store.deleteTodo(this.todo.id)
  }
}

export default TodoItem
