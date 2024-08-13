import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function GetLatest({
    _id,
    typeOfEstate,
    mainImg,
    description
}) {
    return (
        <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src={mainImg} style={{ width: '100%', height: 'auto' }} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Card.Title style={{ textAlign: 'center' }}>Rent {typeOfEstate} apartment</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                    {description}
                </Card.Text>
                <div style={{ textAlign: 'center' }}>
                    <Button as={Link} to={`/estates/${_id}`} variant="primary" style={{ width: '30%', textAlign: 'center' }}>Details</Button>
                </div>
            </Card.Body>
        </Card>
    );
};