import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
import p1 from '../assets/p1.jpg'
const TestnomialSlider = () => {
  return (
    
        <Carousel 
            additionalTransfrom={0} 
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
         >
            <ClientReview  image={p1} 
                name="Rahul Kumar" 
                role="Web Developer"
                />
             <ClientReview  image={p1} 
                name="Rahul Kumar" 
                role="Web Developer"
                />
             <ClientReview  image={p1} 
                name="Rahul Kumar" 
                role="Web Developer"
                />
             <ClientReview  image={p1} 
                name="Rahul Kumar" 
                role="Web Developer"
                />
                 <ClientReview  image={p1} 
                name="Rahul Kumar" 
                role="Web Developer"
                />
  </Carousel>
  
  )
}

export default TestnomialSlider