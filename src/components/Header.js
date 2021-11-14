import { LitElement, html } from "lit";

class Header extends LitElement {
  render() {
    return html` <p>Header</p> `;
  }
}

customElements.define("header-component", Header);
