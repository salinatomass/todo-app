import { css } from 'lit';

export const headerStyles = css`
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
  .header img {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .header {
      padding-top: 50px;
      padding-bottom: 20px;
    }
  }
`;
