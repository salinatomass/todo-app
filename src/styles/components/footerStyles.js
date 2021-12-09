import { css } from 'lit';

export const footerStyles = css`
  .footer {
    padding-top: 36px;
    padding-bottom: 56px;
    color: var(--active-text-color);
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .footer {
      padding-bottom: 0;
      position: relative;
      top: -90px;
    }
  }
`;
