import { LitElement, html } from 'lit';
import { v4 as uuid } from 'uuid';

import { todoListStyles } from '../styles/components/todoListStyles';
import { optionsTemplateStyles } from '../styles/components/optionsTemplateStyles';
import { addTodoTemplateStyles } from '../styles/components/addTodoTemplateStyles';

import iconCross from '../images/icon-cross.svg';

class TodoList extends LitElement {
  static properties = {
    listItems: {
      type: Array,
    },
    filteredItems: { type: String },
  };

  static styles = todoListStyles;

  constructor() {
    super();
    this.listItems = [];
    this.filteredItems = 'all';
  }

  render() {
    const TODO_CASES = {
      active: this.listItems.filter(item => !item.completed), // "active"
      completed: this.listItems.filter(item => item.completed), // "completed"
    };
    const TODO_DEFAULT_CASE = this.listItems; // "all"
    const items = TODO_CASES[this.filteredItems] || TODO_DEFAULT_CASE;

    const addTodoTemplate = html`
      <section class="main-action">
        <div class="check-circle"></div>
        <form @submit=${this._addToDo}>
          <input id="newItem" type="text" placeholder="Create a new todo..." />
        </form>
      </section>
      <style>
        ${addTodoTemplateStyles}
      </style>
    `;

    const todoListTemplate = html` <ul class="main-list">
      ${items.map(
        item => html`
          <li class=${item.completed ? 'completed' : ''}>
            <div
              @click=${() => this._toggleCompleted(item)}
              class="check-circle"
            >
              <div class="check-icon"></div>
            </div>
            <p>${item.text}</p>
            <img @click=${() => this._deleteItem(item)} src=${iconCross} />
          </li>
        `
      )}
      <div class="main-list-info">
        <p>
          ${this.listItems.filter(item => !item.completed).length} items left
        </p>
        <button @click=${this._clearCompleted} type="button">
          Clear Completed
        </button>
      </div>
    </ul>`;

    const optionsTemplate = html`
      <section @click=${this._clickHandler} class="main-options">
        <button class="selected" name="all" type="button">All</button>
        <button name="active" type="button">Active</button>
        <button name="completed" type="button">Completed</button>
      </section>
      <style>
        ${optionsTemplateStyles}
      </style>
    `;

    if (!this.listItems.length > 0)
      return html`<ul class="main-list">
        ${addTodoTemplate}
      </ul>`;

    return html` ${addTodoTemplate} ${todoListTemplate} ${optionsTemplate}`;
  }

  _setLocalStorage() {
    window.localStorage.setItem('todoList', JSON.stringify(this.listItems));
  }

  get input() {
    return this.renderRoot?.querySelector('#newItem') ?? null;
  }

  _addToDo(e) {
    e.preventDefault();
    this.listItems = [
      ...this.listItems,
      {
        id: uuid(),
        text: this.input.value,
        completed: false,
      },
    ];
    this.input.value = '';

    this._setLocalStorage();
  }

  _clearCompleted(e) {
    this.listItems = this.listItems.filter(item => !item.completed);
    this._setLocalStorage();
  }

  _deleteItem(item) {
    this.listItems = this.listItems.filter(task => task.id !== item.id);
    this._setLocalStorage();
  }

  _toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();

    this._setLocalStorage();
  }

  _clickHandler(e) {
    if (e.target !== e.currentTarget) {
      this.filteredItems = e.target.name;

      const buttons = this.renderRoot.querySelectorAll('button[name]');
      buttons.forEach(button => button.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  }
}

customElements.define('todo-list', TodoList);
