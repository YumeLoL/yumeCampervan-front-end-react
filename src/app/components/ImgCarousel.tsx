
import React, { useRef } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface IProps {
    imgUrl: string[];
}

export const ImgCarousel = ({ imgUrl }: IProps) => {
    const carousel = useRef<AliceCarousel>(null);
    const items = imgUrl.map((url, index) => {
        return <img key={index} src={url} alt="" />
    });


    return (
        <>
            <AliceCarousel
                key="carousel"
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={items}
                ref={carousel}
            />
            <nav key="nav" className="b-refs-navs">
                {items.map((item, i) => {
                    return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
                })}
            </nav>
            <BtnL key="btns" className="b-refs-buttons">
                <button onClick={(e) => carousel?.current?.slidePrev(e)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            </BtnL>
            <BtnR>
                <button onClick={(e) => carousel?.current?.slideNext(e)}><FontAwesomeIcon icon={faChevronRight} /></button>
            </BtnR>
        </>)
};


const BtnL = styled.button`
${tw`
absolute
top-[42%] 
left-[5px]
text-gray-50
hover:(text-gray-200 transition ease-in-out duration-150)
text-3xl
`}`

const BtnR = styled.button`
${tw`
absolute 
top-[42%] 
right-[5px]
text-gray-50
hover:(text-gray-200 transition ease-in-out duration-150)
text-3xl
`}`

