import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSlideshow() {
    return (
        <CardGroup>
            <Card>
                <Card.Text>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_coupon072022_310x210.jpg"
                    alt="First slide"
                    height="250px"
                />
                </Card.Text>
            </Card>
            <Card>
                <Card.Text>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/VNPay_072022_310x210.jpg"
                    alt="First slide"
                    height="250px"
                />
                </Card.Text>
            </Card>
            <Card>
                <Card.Text>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Thieu_nhi/thang5/quoctethieunhi_1.1_310x210.jpg"
                    alt="First slide"
                    height="250px"
                />
                </Card.Text>
            </Card>
            <Card>
                <Card.Text>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2022/Megasale_ship072022_310x210.jpg"
                    alt="First slide"
                    height="250px"
                />
                </Card.Text>
            </Card>
        </CardGroup>
    );
}

export default CardSlideshow;