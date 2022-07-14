import * as React from 'react';
import { Card, ListGroup } from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactDetails from '../../models/contact-details';
import './contact-card.scss';

interface ContactCardProps {
   contact: ContactDetails;
}

const ContactCard: React.FunctionComponent<ContactCardProps> = (props: ContactCardProps) => {
   return (
      <Card className="contact-card">
         <Card.Body>
            <Card.Title>{`UserName: ${props.contact.firstName} ${props.contact.lastName}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`Address: ${props.contact.address} Phone Number: ${props.contact.phoneNo}`}</Card.Subtitle>
         </Card.Body>
         <ListGroup className="list-group-flush">
            <ListGroup.Item>{`Email: ${props.contact.emailId}`}</ListGroup.Item>
            <ListGroup.Item>{`Notes: ${props.contact.notes}`}</ListGroup.Item>
            <ListGroup.Item>{`Category: ${props.contact.category}`}</ListGroup.Item>
            <ListGroup.Item>{`Org Name: ${props.contact.orgName}`}</ListGroup.Item>
            <ListGroup.Item>{`Tags: ${props.contact.tags}`}</ListGroup.Item>
         </ListGroup>
         <Card.Body>
            <Card.Link href={props.contact.websiteUrl}>Website Url</Card.Link>
         </Card.Body>
    </Card>
   )
}

export default ContactCard;