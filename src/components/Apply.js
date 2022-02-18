import React from "react";
import styled from "styled-components";

const Apply = () => {
  return (
    <ApplyBlock>
      <Tour></Tour>
      <TopScroll>^</TopScroll>
    </ApplyBlock>
  );
};

const ApplyBlock = styled.div`
  width: 220px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tour = styled.div`
  width: 150px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: orange;
`;

const TopScroll = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid orange;
  font-size: 40px;
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Apply;
