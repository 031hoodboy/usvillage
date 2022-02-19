import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Apply from "../components/Apply";
import NewmainBanner02 from "../assets/newmain_banner02.png";
import NewmainBanner03 from "../assets/newmain_banner03.png";
import NewmainBanner05 from "../assets/newmain_banner05.png";
import NewmainBanner06 from "../assets/newmain_banner06.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  return (
    <PageBlock>
      <Apply />
      <Header />
      <ContentsBlock>
        <TopContentsWrapper>
          <MainLogo></MainLogo>
          <SwiperWrapper
            className="banner"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Card>
                  <Card1Background></Card1Background>
                </Card>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Card>
                  <Card2Background></Card2Background>
                </Card>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Card>
                  <Card3Background></Card3Background>
                </Card>
              </Link>
            </SwiperSlide>
          </SwiperWrapper>
        </TopContentsWrapper>
        <MiddleContentsWrapper></MiddleContentsWrapper>
        <BottomContentsWrapper></BottomContentsWrapper>
      </ContentsBlock>
      <Footer />
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentsBlock = styled.div`
  width: 100%;
  height: 100vh;
`;

const TopContentsWrapper = styled.div``;
const MiddleContentsWrapper = styled.div``;
const BottomContentsWrapper = styled.div``;
const MainLogo = styled.div``;

const SwiperWrapper = styled(Swiper)`
  width: 398px;
  height: 197px;
  justify-content: space-between;
  display: flex;
`;

const Card = styled.div`
  width: 398px;
  height: 197px;
  overflow: hidden;
`;

const Card1Background = styled.div`
  width: 398px;
  height: 197px;
  background-image: url(${NewmainBanner02});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Card2Background = styled(Card1Background)`
  background-image: url(${NewmainBanner03});
`;

const Card3Background = styled(Card1Background)`
  background-image: url(${NewmainBanner06});
`;

export default Main;
