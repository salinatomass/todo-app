import './styles/styles.css';

import { LitElement, html } from 'lit';

import './components/header-component';
import './components/todo-list';
import './components/footer-component';

export class TodoApp extends LitElement {
  static properties = {
    listItems: {},
    filteredItems: {},
    isDark: {},
  };

  constructor() {
    super();
    this.listItems = JSON.parse(localStorage.getItem('todoList')) || [];
    this.filteredItems = 'all';
    this.isDark = localStorage.getItem('isDark') === 'true' ? true : false;
  }

  render() {
    return html`
      <header-component .isDark=${this.isDark}></header-component>

      <main class="main">
        <todo-list
          .listItems=${this.listItems}
          .filteredItems=${this.filteredItems}
        ></todo-list>
      </main>

      <footer-component></footer-component>
    `;
  }
}

customElements.define('todo-app', TodoApp);
