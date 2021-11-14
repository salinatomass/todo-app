import { LitElement, html } from "lit";

class TodoApp extends LitElement {
  static properties = {
    listItems: { attribute: false },
    filteredItems: {},
  };

  constructor() {
    super();
    this.listItems = [
      { text: "tarea 1", completed: false },
      { text: "tarea 2", completed: true },
      { text: "tarea 3", completed: true },
      { text: "tarea 4", completed: false },
      { text: "tarea 5", completed: true },
    ];
    this.filteredItems = "all";
  }

  render() {
    const TODO_CASES = {
      active: this.listItems.filter((item) => !item.completed),
      completed: this.listItems.filter((item) => item.completed),
    };
    const TODO_DEFAULT_CASE = this.listItems;
    const items = TODO_CASES[this.filteredItems] || TODO_DEFAULT_CASE;

    const todosComponent = html`
      <ul>
        ${items.map((item) => html` <li>${item.text}</li> `)}
      </ul>
    `;

    const searchComponent = html`
      <form @submit=${this._addToDo}>
        <input id="newItem" type="text" placeholder="Create a new todo..." />
      </form>
    `;

    const choseComponent = html`
      <div @click=${this._clickHandler}>
        <button name="all" type="button">All</button>
        <button name="active" type="button">Active</button>
        <button name="completed" type="button">Completed</button>
      </div>
    `;

    return html` ${searchComponent} ${todosComponent} ${choseComponent} `;
  }

  get input() {
    return this.renderRoot?.querySelector("#newItem") ?? null;
  }

  _addToDo(e) {
    e.preventDefault();
    this.listItems.push({ text: this.input.value, completed: false });
    this.input.value = "";
    this.requestUpdate();
  }

  _clickHandler(e) {
    if (e.target !== e.currentTarget) {
      this.filteredItems = e.target.name;
    }
  }
}

customElements.define("todo-app", TodoApp);
