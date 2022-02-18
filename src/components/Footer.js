import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWrapper>
        <InfoWrapper></InfoWrapper>
        <TermsWrapper></TermsWrapper>
      </FooterWrapper>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const FooterWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 71px;
  display: flex;
  padding-bottom: 14px;
  justify-content: space-between;
  align-items: flex-end;
`;

const InfoWrapper = styled.div``;

const TermsWrapper = styled.div``;

export default Footer;
