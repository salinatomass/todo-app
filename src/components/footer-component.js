import { LitElement, html } from "lit";
import { footerStyles } from "../styles/components/footerStyles";

class FooterComponent extends LitElement {
  static styles = footerStyles;

  render() {
    return html`
      <footer class="footer">
        <p>Drag and drop to reorder list</p>
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
