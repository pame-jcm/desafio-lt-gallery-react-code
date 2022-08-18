import { Container, Badge } from "react-bootstrap";


const Footer = ({content}) => {
    return <Container fluid className="p-3 bg-white-transparent text-white sticky-bottom">
                <Container className="fw-semibold p-3">
                    {content}
                    <Badge pill className="ms-3" bg="dark">
                        Version 1.0.0
                    </Badge>
                </Container>
           </Container>
}

export default Footer;