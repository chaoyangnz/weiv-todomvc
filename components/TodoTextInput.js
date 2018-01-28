import { Component, observable } from 'weivjs'

@Component({
  template: `
  <input @bind:class="{edit: this.editing,'new-todo': this.newTodo}"
         type="text"
         @bind:placeholder="placeholder"
         autofocus="true"
         @bind:value="value"
         onblur="handleBlur"
         onchange="handleChange"
         onkeydown="handleSubmit" />
  `,
  props: {
    text: { type: 'string' },
    placeholder: { type: 'string' },
    editing: { type: 'boolean' },
    newTodo: { type: 'boolean' }
  },
  events: {
    save: { type: 'function' }
  }
})
class TodoTextInput {
  @observable value = ''; // this.value = this.props.text || ''

  handleSubmit = (e) => {
    const value = e.target.value.trim()
    if (e.which === 13) {
      this.$emit('save', value)
      if (this.newTodo) {
        this.value = ''
      }
    }
  }

  handleChange = (e) => {
    this.value = e.target.value
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.$emit('save', e.target.value)
    }
  }
}

export default TodoTextInput
