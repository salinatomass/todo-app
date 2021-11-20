import { css } from "lit";

export const optionsTemplateStyles = css`
  .main-options {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background-color: var(--white-color);
    border-radius: 4px;
  }
  .main-options button {
    padding: 18px 10px;
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
`;
