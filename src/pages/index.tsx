import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import AssessmentIcon from '@mui/icons-material/Assessment';

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
          padding: 30px 20px;
        `}
      >
        <ButtonGroup>
          <Link href="/roadmap" passHref>
            <Box>
              <IconWrapper color="rgb(212, 89, 111)" backgroundColor="rgba(212, 89, 111, 0.2)">
                <AssessmentIcon />
              </IconWrapper>
              일정
            </Box>
          </Link>

          <Link href="/member" passHref>
            <Box>
              <IconWrapper color="rgb(240, 199, 82)" backgroundColor="rgba(240, 199, 82, 0.2)">
                <AssessmentIcon />
              </IconWrapper>
              회원
            </Box>
          </Link>

          <Link href="/rule" passHref>
            <Box>
              <IconWrapper color="rgb(88, 187, 134)" backgroundColor="rgba(88, 187, 134, 0.2)">
                <AssessmentIcon />
              </IconWrapper>
              회칙
            </Box>
          </Link>
        </ButtonGroup>
      </main>
    </div>
  );
};

export default Index;

const Header = styled.header`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const IconWrapper = styled.div<{ color: string; backgroundColor: string }>`
  border-radius: 50%;
  color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border-width: 1px;
  border-style: solid;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.a`
  background: rgb(251, 251, 255);
  width: 100px;
  border: none;
  outline: none;
  border-radius: 30px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 24px;
  letter-spacing: -0.5px;
`;
