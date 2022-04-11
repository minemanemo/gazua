import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Logo from '@/components/Icon/Logo';

const Index = () => {
  return (
    <div>
      <Header>
        <Logo />
      </Header>

      <main
        css={css`
          font-size: 20px;
          color: #111;
          letter-spacing: -0.5px;
          text-align: center;
        `}
      >
        coming soon...
      </main>
    </div>
  );
};

export default Index;

const Header = styled.header`
  text-align: center;
`;
