import Nav from 'react-bootstrap/Nav';
import '../Styles/JustifiedExample.css'

function JustifiedExample() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Longer </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Link..</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default JustifiedExample;
