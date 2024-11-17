import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import NftCard from "./NftCard";
import fetchData from "../utils/fetch";
import back from "../assets/icons/back.svg";
import forward from "../assets/icons/forward.svg";

const Slider = ({ url, start, end }) => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    const fetchNfts = async () => {
      const res = await fetchData(url);
      setNfts(res.nfts.slice(start, end));
    };
    fetchNfts();
  }, [start, end, url]);
  return (
    <div className="p-5">
      <Carousel
        additionalTransfrom={0}
        customButtonGroup={<CustomButtonGroup />}
        autoPlay={false}
        arrows={false}
        centerMode={false}
        className="relative pb-24"
        customTransition="all 2s linear"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={20}
        pauseOnHover
        responsive={{
          larger: {
            breakpoint: {
              max: 3000,
              min: 1260,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          desktop: {
            breakpoint: {
              max: 1260,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 10,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={2000}
      >
        {nfts && nfts.map((nft) => <NftCard nft={nft} key={nft.name} />)}
      </Carousel>
    </div>
  );
};

const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute z-50 top-[420px] flex gap-x-7">
      <button onClick={() => goToSlide(currentSlide - 1)}>
        <div className="p-3 rounded-full border border-[#797979]">
          <img src={back} alt="" />
        </div>
      </button>
      <button onClick={() => goToSlide(currentSlide + 1)}>
        <div className="p-3 rounded-full border border-[#797979]">
          <img src={forward} alt="" />
        </div>
      </button>
    </div>
  );
};

export default Slider;
