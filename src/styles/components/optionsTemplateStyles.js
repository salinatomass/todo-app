import { css } from 'lit';

export const optionsTemplateStyles = css`
  .main-options {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background-color: var(--white-color);
    border-radius: 4px;

    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
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

    cursor: pointer;
  }
  .main-options button.selected {
    color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
    .main-options {
      width: fit-content;
      height: 70px;
      gap: 0;
      margin: 0 auto;
      background: transparent;
      box-shadow: none;
      position: relative;
      top: -90px; // -20px (margin) - 70px (height)
    }
  }
`;
