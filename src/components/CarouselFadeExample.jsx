import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import services1 from '../assets/services1.png';
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
function CarouselFadeExample() {
  const cardsData = [
    [
      {
        image: services1,
        title: 'Mega Turkey',
        price: '1200',
        date: '12 Jan - 18 Jan',
        days: 5
      },
      {
        image:  services2,
        title: 'Finlande',
        price: '$ 1200',
        date: '12 Jan - 18 Jan',
        days: 5
      },
      {
        image: services3,
        title: 'Spitzberg',
        price: '1200',
        date: '12 Jan - 18 Jan',
        days: 5
      }
    ],
    // add more groups with 3 cards each for more slides
     [
    { image: services1, title: 'Rajasthan', price: '1300', date: '20 Jan - 25 Jan', days: 6 },
    { image: services2, title: 'South Africa', price: '1400', date: '21 Jan - 26 Jan', days: 6 },
    { image: services3, title: 'Swizerland', price: '1500', date: '22 Jan - 27 Jan', days: 6 },
  ],
  ];

  return (
    <>
      <style>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: blue;
          border-radius: 50%;
          width: 35px;
          height: 35px;
        }
        .carousel-control-prev,
        .carousel-control-next {
          width: 50px; /* increase clickable area */
        }
          
           @media (max-width: 680px) {
          .carousel-item > div {
            flex-wrap:wrap !important;
            align-items: center;
          }
          .card-container {
            width: 90% !important;
            margin: 10px 0 !important;
          }
        }
      `}</style>
      
      <Carousel slide={false}>
        {cardsData.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {group.map((cardProps, i) => (
                <ExampleCarouselImage key={i} {...cardProps} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;
