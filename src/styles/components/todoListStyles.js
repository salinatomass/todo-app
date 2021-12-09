import { css, unsafeCSS } from 'lit';

import iconCheck from '../../images/icon-check.svg';

export const todoListStyles = css`
  .check-circle {
    width: 24px;
    height: 24px;
    border: 1px solid var(--secondary-text-color);
    border-radius: 50%;

    cursor: pointer;
  }

  .main-list {
    margin: 20px 0;
    padding: 0;
    font-size: 1.4rem;
    line-height: 1.6;
    letter-spacing: 0.8px;
    background: var(--white-color);
    border-radius: 4px;

    box-shadow: 0 16px 34px 0 rgba(0, 0, 0, 0.1);
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

    cursor: pointer;
  }
  .main-list-info {
    height: 50px;
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

    cursor: pointer;
  }
  .main-list li.completed > .check-circle {
    background-image: var(--check-background);
  }
  .main-list li.completed > .check-circle .check-icon {
    width: 100%;
    height: 100%;
    background-image: url(${unsafeCSS(iconCheck)});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
  }
  .main-list li.completed > p {
    text-decoration: line-through;
    color: var(--secondary-text-color);
  }
`;
