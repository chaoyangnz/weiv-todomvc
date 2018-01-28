import AppState from './stores/appstate'
import 'todomvc-app-css/index.css'
import App from './components/App';

// MWE: Generate todos for benchmarking
const STORE_SIZE = 10;

const initialState = []

for (var i = 0; i < STORE_SIZE; i++) {
  initialState.push({
    text: 'Item' + i,
    completed: false,
    id: i,
    // reference to some other todo item, to similate
    // having references to other objects in the state
    other: i > 0
      ? initialState[i - 1]
      : null
  });
}

const store = new AppState(initialState);

const app = new App()
app.store = store
app.$mount('root')
