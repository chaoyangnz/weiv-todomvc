import {Component} from 'weivjs'
import Header from './Header'
import MainSection from './MainSection'
import store from '../stores/appstate'

@Component({
  template: `
  <div>
    <todo-header store={store} />
    <todo-main-section store={store} />
  </div>
  `,
  props: {
    store: { type: 'any', required: true }
  },
  components: {
    'todo-header': Header,
    'todo-main-section': MainSection
  }
})
class App {}

export default App