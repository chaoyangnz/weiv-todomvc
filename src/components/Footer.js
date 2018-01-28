import { Component } from 'weivjs'
// import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../stores/appstate'

@Component({
  template: `
  <footer class="footer">
    <span class="todo-count">
      <strong>{{store.activeCount || 'No'}}</strong> {{store.activeCount === 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
        <li key={filter} @for:filter="filters">
          <a @bind:class="filter === store.filter ? 'selected' : ''"
            style="cursor: 'pointer'"
            onclick="handleSetFilter">
            {titles[filter]}
          </a>
        </li>
    </ul>
    <button @if="store.completedCount > 0"
            class="clear-completed"
            onclick="handleClearCompleted" >
      Clear completed
    </button>
  </footer>
  `,
  props: {
    store: { type: 'any', required: true }
  }
})
class Footer {

  filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED]
  titles = {
    SHOW_ALL: 'All',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
  }

  handleSetFilter() { // TODO how to pass params to event handler??
    // this.store.setFilter(filter)
  }

  handleClearCompleted() {
    this.store.clearCompleted()
  }
}

export default Footer
