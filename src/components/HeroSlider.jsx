import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftImage from "./NftImage";
import fetchData from "../utils/fetch";

const HeroSlider = () => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    const fetchNfts = async () => {
      const res = await fetchData(
        "https://api.opensea.io/api/v2/collection/cryptopunks/nfts?limit=30"
      );
      setNfts(res.nfts);
    };
    fetchNfts();
  }, []);

  return (
    <div className="p-5">
      <Carousel
        additionalTransfrom={0}
        autoPlay
        arrows={false}
        autoPlaySpeed={1}
        centerMode={false}
        className="container-with-dots"
        customTransition="all 6s linear"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 7,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={true}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={6000}
      >
        {nfts &&
          nfts.map((nft) => (
            <NftImage url={nft.display_image_url} key={nft.identifier} />
          ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
