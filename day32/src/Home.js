import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
    return(
        <>
      <Carousel>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100"
          src="https://www.creativ-eras.com/assets/images/library-slider-img-3.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100"
          src="https://www.vervelogic.com/blog/wp-content/uploads/2019/08/LMS-model.png"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"600px"}}
          className="d-block w-100 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vRHiWpnYseQTOEUUWTPSWRJawCr0Aj9phbSWLbcxz1PDg3bRv6PmUzdWm5wz40X1ek8&usqp=CAU"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </>
    )
}

