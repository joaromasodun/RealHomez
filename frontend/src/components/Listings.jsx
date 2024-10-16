import SectionHeader from "./SectionHeader";
import Property from "./Property";
import properties from "../data/propertiesData";
import useEmblaCarousel from '../../node_modules/embla-carousel-react'
import { DotButton, useDotButton } from '../UI/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../UI/EmblacarouselArrowButtons.jsx'

export default function Listings() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="py-10">
      <SectionHeader subText="Properties" mainHeader="Featured Listings" />

      {/* <div className="container mx-auto p-6">
        <Slider {...settings}>
          {properties.map((property, index) => (
            <Property key={index} property={property} />
          ))}
        </Slider>
      </div> */}

      
    <div className="container mx-auto p-6 relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            {properties.map((property, index) => (
              <div className="embla__slide" key={index}>
                  <Property  property={property} />
              </div>
            ))}
          
          {/* <div className="embla__slide">
            <img src="https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww" alt="" />
          </div>
          <div className="embla__slide">
            <img src="
          https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BsYXNofGVufDB8fDB8fHww
            " alt="" />
          </div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div> */}
        </div>
      </div>

      <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
      </div>

      <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
    </section>
  )
}
