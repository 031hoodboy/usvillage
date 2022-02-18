import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWrapper>
        <Top>
          <InfoBlock>
            <InfoWrapper>
              <Title>상호명</Title> <Info>(주)어스빌리지</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>대표</Title> <Info>이연진</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>주소</Title>{" "}
              <Info>(06054)서울시 강남구 언주로 736 4층</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>사업자등록번호</Title> <Info>516-81-01779</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>통신판매신고</Title> <Info>제2021-서울강남-06757호</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>대표전화</Title> <Info>1544-7740</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Title>팩스</Title> <Info>070-5099-8008</Info>
            </InfoWrapper>
          </InfoBlock>
          <TermsWrapper>
            <Terms style={{ borderRight: "1px solid #666" }}>이용약관</Terms>
            <Terms>개인정보 처리 방침</Terms>
          </TermsWrapper>
        </Top>
        <CopyRight>ⓒ 2021 USVILLAGE ALL RIGHTS RESERVED.</CopyRight>
      </FooterWrapper>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  width: 100%;
  border-top: 2px solid lightgray;
  color: #666;
  font-size: 12px;
`;

const FooterWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoBlock = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  margin-top: 10px;
`;

const TermsWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin-right: 5px;
  font-weight: 800;
`;

const Info = styled.div``;

const Terms = styled.div`
  padding: 0 8.5px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CopyRight = styled.div`
  margin-top: 48px;
`;

export default Footer;
