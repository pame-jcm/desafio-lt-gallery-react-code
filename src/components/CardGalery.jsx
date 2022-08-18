

import Card from 'react-bootstrap/Card';

const CardGalery = ({imgSrc, imgWidth, paddingTop,  titleCard, descriptionCard}) => {

    return <Card style={{width:imgWidth, height:'auto'}}  className={`ms-3 my-3 border-white-transparent-0 bg-white-transparent-0`}>
                <Card.Img variant="top" src={imgSrc} style={{paddingTop:paddingTop}}/>
                <Card.Body>
                    <Card.Title>{titleCard}</Card.Title>
                    <Card.Text>
                        {descriptionCard}
                    </Card.Text>
                </Card.Body>
           </Card>


}

export default CardGalery;