import { LitElement, html, css } from "lit";
import { v4 as uuid } from "uuid";

class TodoApp extends LitElement {
  static properties = {
    listItems: { attribute: false },
    filteredItems: {},
    isDark: {},
  };

  static styles = css`
    .check-circle {
      width: 24px;
      height: 24px;
      border: 1px solid var(--secondary-text-color);
      border-radius: 50%;
    }

    .header {
      width: 100%;
      padding-top: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--header-logo-color);
      letter-spacing: 1rem;
      text-transform: uppercase;
    }
    .main-action {
      padding: 10px 18px;
      display: grid;
      grid-template-columns: 28px 1fr;
      align-items: center;
      grid-gap: 9px;
      background: var(--white-color);
      border-radius: 4px;
    }
    .main-action input#newItem {
      width: 100%;
      padding: 0;
      font-family: var(--primary-font);
      font-size: 1.4rem;
      color: var(--primary-text-color);
      border: none;
      outline: none;
      background: var(--white-color);
    }
    ::placeholder {
      font-family: var(--primary-font);
      color: var(--secondary-text-color);
    }

    .main-list {
      margin-top: 20px;
      padding: 0;
      font-size: 1.4rem;
      line-height: 1.6;
      letter-spacing: 0.8px;
      background: var(--white-color);
      border-radius: 4px;
    }
    .main-list li {
      padding: 10px 18px;
      display: grid;
      grid-template-columns: 28px 1fr 28px;
      align-items: center;
      grid-gap: 9px;
      border-bottom: 1px solid var(--secondary-text-color);
    }
    .main-list li img {
      justify-self: flex-end;
    }
    .main-list-info {
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--secondary-text-color);
    }
    .main-list-info button {
      font-family: var(--primary-font);
      color: var(--secondary-text-color);
      background: none;
      border: none;
    }
    .main-list li.completed > .check-circle {
      background-image: var(--check-background);
    }
    .main-list li.completed > .check-circle .check-icon {
      width: 100%;
      height: 100%;
      background-image: url("./src/images/icon-check.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px;
    }
    .main-list li.completed > p {
      text-decoration: line-through;
      color: var(--secondary-text-color);
    }

    .main-options {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      background-color: var(--white-color);
      border-radius: 4px;
    }
    .main-options button {
      padding: 18px 0;
      font-weight: 700;
      font-size: 1.6rem;
      letter-spacing: 1.4px;
      color: var(--active-text-color);
      background: transparent;
      border: none;
      outline: none;
    }
    .main-options button.selected {
      color: var(--primary-color);
    }

    .footer {
      padding-top: 36px;
      padding-bottom: 56px;
      color: var(--active-text-color);
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.listItems = [
      {
        id: "ad74c494-8d7b-4109-a15f-5f5bbf01b4b8",
        text: "Complete online JavaScript course",
        completed: true,
      },
      {
        id: "c6df37c1-c398-42b3-bec9-b3e267ee4a6f",
        text: "Jog around the park 3x",
        completed: false,
      },
      {
        id: "1f74815e-4f49-4e04-beda-bdaaec23c56b",
        text: "10 minutes meditation",
        completed: false,
      },
      {
        id: "3aa19183-7c31-4546-9fb7-5c254689c9f1",
        text: "Read for 1 hour",
        completed: false,
      },
      {
        id: "70ab2fc2-f593-4721-bc12-e376f4addb67",
        text: "Pick up graceries",
        completed: false,
      },
      {
        id: "a6c74fb7-caaa-4614-be7e-31fc1f196f59",
        text: "Complete Todo App on Frontend Mentor",
        completed: false,
      },
    ];
    this.filteredItems = "all";
    this.isDark = true;
  }

  render() {
    this.isDark
      ? document.body.classList.add("isDark")
      : document.body.classList.remove("isDark");

    const TODO_CASES = {
      active: this.listItems.filter((item) => !item.completed), // "active"
      completed: this.listItems.filter((item) => item.completed), // "completed"
    };
    const TODO_DEFAULT_CASE = this.listItems; // "all"
    const items = TODO_CASES[this.filteredItems] || TODO_DEFAULT_CASE;

    const source = this.isDark
      ? "./src/images/icon-sun.svg"
      : "./src/images/icon-moon.svg";

    const headerComponent = html`
      <header class="header">
        <h1 translate="no">Todo</h1>
        <img @click=${this._toggleTheme} src=${source} />
      </header>
    `;

    const addToDoComponent = html`
      <section class="main-action">
        <div class="check-circle"></div>
        <form @submit=${this._addToDo}>
          <input id="newItem" type="text" placeholder="Create a new todo..." />
        </form>
      </section>
    `;

    const todosListComponent = html`
      <ul class="main-list">
        ${items.map(
          (item) => html`
            <li class=${item.completed ? "completed" : ""}>
              <div
                @click=${() => this._toggleCompleted(item)}
                class="check-circle"
              >
                <div class="check-icon"></div>
              </div>
              <p>${item.text}</p>
              <img
                @click=${() => this._deleteItem(item)}
                src="./src/images/icon-cross.svg"
              />
            </li>
          `
        )}
        <div class="main-list-info">
          <p>
            ${this.listItems.filter((item) => !item.completed).length} items
            left
          </p>
          <button @click=${this._clearCompleted} type="button">
            Clear Completed
          </button>
        </div>
      </ul>
    `;

    const optionsComponent = html`
      <section @click=${this._clickHandler} class="main-options">
        <button class="selected" name="all" type="button">All</button>
        <button name="active" type="button">Active</button>
        <button name="completed" type="button">Completed</button>
      </section>
    `;

    const footerComponent = html`
      <footer class="footer">
        <p>Drag and drop to reorder list</p>
      </footer>
    `;

    if (!this.listItems.length > 0) {
      return html`
        ${headerComponent}
        <main class="main">${addToDoComponent}</main>
      `;
    }

    return html`
      ${headerComponent}
      <main class="main">
        ${addToDoComponent} ${todosListComponent} ${optionsComponent}
      </main>
      ${footerComponent}
    `;
  }

  get input() {
    return this.renderRoot?.querySelector("#newItem") ?? null;
  }

  _addToDo(e) {
    e.preventDefault();
    this.listItems.push({
      id: uuid(),
      text: this.input.value,
      completed: false,
    });
    this.input.value = "";
    this.requestUpdate();
  }

  _clickHandler(e) {
    if (e.target !== e.currentTarget) {
      this.filteredItems = e.target.name;

      const buttons = this.renderRoot.querySelectorAll("button[name]");
      buttons.forEach((button) => button.classList.remove("selected"));
      e.target.classList.add("selected");
    }
  }

  _clearCompleted(e) {
    this.listItems = this.listItems.filter((item) => !item.completed);
  }

  _toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  _deleteItem(item) {
    this.listItems = this.listItems.filter((task) => task.id !== item.id);
  }

  _toggleTheme(e) {
    this.isDark = !this.isDark;
  }
}

customElements.define("todo-app", TodoApp);
