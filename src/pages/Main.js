import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Apply from "../components/Apply";

const Main = () => {
  return (
    <PageBlock>
      <Apply />
      <Header />
      <Contents />
      <Footer />
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Main;
