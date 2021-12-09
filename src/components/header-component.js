import { LitElement, html } from 'lit';
import { headerStyles } from '../styles/components/headerStyles';

import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

class HeaderComponent extends LitElement {
  static properties = {
    isDark: { type: Boolean },
  };

  static styles = headerStyles;

  constructor() {
    super();
    this.isDark = false;
  }

  render() {
    this.isDark
      ? document.body.classList.add('isDark')
      : document.body.classList.remove('isDark');

    const source = this.isDark ? iconSun : iconMoon;

    return html`
      <header class="header">
        <h1 translate="no">Todo</h1>
        <img @click=${this._toggleTheme} src=${source} />
      </header>
    `;
  }

  _toggleTheme(e) {
    this.isDark = !this.isDark;
    window.localStorage.setItem('isDark', this.isDark);
  }
}

customElements.define('header-component', HeaderComponent);
