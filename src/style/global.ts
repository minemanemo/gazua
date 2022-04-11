import { css } from '@emotion/react';

const global = css`
  @font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Cafe24Oneprettynight, sans-serif;
    -ms-overflow-style: none;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default global;
