import { css } from '@emotion/react';

const global = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'SF Pro Display', 'Apple SD Gothic Neo', NotoSansCJK, roboto, Helvetica,
      '맑은 고딕', 'Malgun Gothic', '돋움', dotum, sans-serif;
    -ms-overflow-style: none;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default global;
