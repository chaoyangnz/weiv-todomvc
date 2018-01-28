import {Component} from 'weivjs'
import TodoItem from './TodoItem'
import Footer from './Footer'

@Component({
  template: `
  <input class="toggle-all"
    type="checkbox"
    checked="store.completedCount === store.todos.length"
    onchange="onChange" />
  `,
  props: {
    store: { type: 'any', required: true }
  }
})
class ToggleAll {
  onChange() {
    this.store.completeAll()
  }
}

@Component({
  template: `
  <ul className="todo-list">
    <todo-item @for:todo="store.visibleTodos" todo={todo} store={store} />
  </ul>
  `,
  props: {
    store: { type: 'any', required: true }
  },
  components: {
    'todo-item': TodoItem
  }
})
class TodoList {}

@Component({
  tempate: `
  <section className="main">
    {store.todos.length ? <todo-toggle-all store={store} /> : null}
    <todo-list store={store} />
    {store.todos.length ? <todo-footer store={store} /> : null}
  </section>
  `,
  props: {
    store: { type: 'any', required: true }
  },
  components: {
    'todo-list': TodoList,
    'todo-toggle-all': ToggleAll,
    'todo-footer': Footer
  }
})
class MainSection extends Component {}

export default MainSection
