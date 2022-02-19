import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <Logo />
        <Login>로그인</Login>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 71px;
  display: flex;
  padding-bottom: 14px;
  justify-content: space-between;
  align-items: flex-end;
`;

const Logo = styled.div`
  width: 152px;
  height: 52px;
  background: #f2f2f2;
`;

const Login = styled.div`
  padding-bottom: 9px;
`;

export default Header;
