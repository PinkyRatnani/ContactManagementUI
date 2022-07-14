import * as React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import ContactDetails from '../../models/contact-details';
import ContactCard from '../contact-card/contact-card';
import ContactForm from '../contact-form/contact-form';
import axios from 'axios';

import './contact-home.scss';

const ContactHome = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [contactData, setContactData] = React.useState<ContactDetails[]>([]);
    const [filteredData,setFilteredData] = React.useState(contactData);

    React.useEffect(() => {
        fetchContacts();
    }, []);

    const handleOpen = () => setShowDialog(true);
    const handleClose = () => setShowDialog(false);

    const fetchContacts = () => {

        fetch('https://localhost:5001/api/user/contacts',
        { 
            mode: 'cors',
           headers:{"Access-Control-Allow-Origin": "*", 
           "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"}
          })
        .then(x =>x.json())
        .then( y=>{setContactData(y) ; setFilteredData(y)})                      
    }

    const handleSearch = (event: any) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = contactData.filter((data) => {
        return data.firstName.search(value) != -1;
        });
        setFilteredData(result);
    }

   return (
    <div className='contact-home-container'>
        <div className='contact-home-header'>
            <button className='text-button' onClick={handleOpen}>New Contact</button>
            <input className="search-bar" type="text" placeholder="Search.." onChange={(event) =>handleSearch(event)}></input>
        </div>

        <Modal show={showDialog} onHide={handleClose}>
           <ContactForm handleClose={handleClose}/>
        </Modal>
        <Row className="contact-list-container">
                {
                    filteredData.map((contactDetail: ContactDetails, index: number) => {
                        return (
                            <Col lg={3} sm={5} md={4}>
                                <ContactCard contact={contactDetail}/>
                            </Col>
                        )
                    })
                }
            </Row>
    </div>
   )
}

export default ContactHome;