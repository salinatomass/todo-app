import { css } from "lit";

export const addTodoTemplateStyles = css`
  .main-action {
    padding: 10px 18px;
    display: grid;
    grid-template-columns: 28px 1fr;
    align-items: center;
    grid-gap: 9px;
    background: var(--white-color);
    border-radius: 4px;
  }
  .main-action form {
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .main-action input#newItem {
    width: 100%;
    height: 100%;
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
`;
