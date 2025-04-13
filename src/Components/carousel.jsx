import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel className="mt-5">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 rounded"
                    src="https://dykraf.com/uploads/img/react-logo.jpg" // Замените на URL вашего изображения
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First React label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 rounded"
                    src="https://dykraf.com/uploads/img/react-logo.jpg" // Замените на URL вашего изображения
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Second React label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://dykraf.com/uploads/img/react-logo.jpg" // Замените на URL вашего изображения
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Third React label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
