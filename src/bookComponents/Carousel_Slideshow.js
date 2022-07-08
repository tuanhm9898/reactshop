import Carousel from 'react-bootstrap/Carousel';
import img3 from '../image/banner3.jpg'
import img4 from '../image/banner4.jpg'


function CarouselSlideshow() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2042508-jpeg.jpg"}
                    alt="First slide"
                    height="400"
                />
                <Carousel.Caption>
                    <div className="conten_item" style={{color: "#212529"}}>
                        <h1>Store Book </h1>
                        <h1>Hè về săn ưu đãi cực chất</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    height="400"
                />

                <Carousel.Caption>
                    <div className="conten_item" style={{color: "#212529"}}>
                        <h1>Free Ship</h1>
                        <h1>cho hóa đơn từ 200k</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    height="400"
                />

                <Carousel.Caption>
                    <div className="conten_item" style={{color: "#212529"}}>
                        <h1>Thanh toán Shoppe Pay</h1>
                        <h1>
                            Giảm 20% mỗi hóa đơn
                        </h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlideshow;