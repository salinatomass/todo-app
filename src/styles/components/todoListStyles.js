import { css } from "lit";

export const todoListStyles = css`
  .check-circle {
    width: 24px;
    height: 24px;
    border: 1px solid var(--secondary-text-color);
    border-radius: 50%;
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
`;
