import * as React from 'react';
import {Form, Button} from 'react-bootstrap';
import "./contact-form.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContactFormProps {
  handleClose: () => void;
}

const ContactForm: React.FunctionComponent<ContactFormProps> = (props: ContactFormProps) => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [firstNameError, setFirstNameError] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [lastNameError, setLastNameError] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [addressError, setAddressError] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = React.useState<string>("");
  const [emailId, setEmailId] = React.useState<string>("");
  const [emailIdError, setEmailIdError] = React.useState<string>("");
  const [notes, setNotes] = React.useState<string>("");
  const [notesError, setNotesError] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [categoryError, setCategoryError] = React.useState<string>("");
  const [orgName, setOrgName] = React.useState<string>("");
  const [orgNameError, setOrgNameError] = React.useState<string>("");
  const [websiteUrl, setWebsiteUrl] = React.useState<string>("");
  const [websiteUrlError, setWebsiteUrlError] = React.useState<string>("");
  const [tags, setTags] = React.useState<string>("");
  const [tagsError, setTagsError] = React.useState<string>("");

  const onFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
    setFirstNameError("");
  }

  const onLastNameChange = (event: any) => {
    setLastName(event.target.value);
    setLastNameError("");
  }

  const onAddressChange = (event: any) => {
    setAddress(event.target.value);
    setAddressError("");
  }

  const onPhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberError("");
  }

  const onEmailIdChange = (event: any) => {
    setEmailId(event.target.value);
    setEmailIdError("");
  }

  const onNotesChange = (event: any) => {
    setNotes(event.target.value);
    setNotesError("");
  }

  const onCategoryChange = (event: any) => {
    setCategory(event.target.value);
    setCategoryError("");
  }

  const onOrgNameChange = (event: any) => {
    setOrgName(event.target.value);
    setOrgNameError("");
  }

  const onWebsiteUrlChange = (event: any) => {
    setWebsiteUrl(event.target.value);
    setWebsiteUrlError("");
  }

  const onTagsChange = (event: any) => {
    setTags(event.target.value);
    setTagsError("");
  }

  const submitHandler = (event: any) => {
    let inputsValidated = validateInput();
    if(inputsValidated){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
                              FirstName : firstName, 
                               LastName : lastName,
                                Address : address,
                                PhoneNo :  parseInt( phoneNumber, 10),
                                EmailId : emailId,
                                 Notes: notes,
                                Category: category,
                                OrgName : orgName,
                                WebsiteUrl : websiteUrl,
                                Tags : tags
                               })
    };

    fetch('https://localhost:5001/api/user/savecontact', requestOptions)
        .then(props.handleClose);
    }
    //event.preventDefault();
  }

  const validateInput = () => {
    let result = true;
    
    if(!firstName){
      result = false;
      setFirstNameError("Please enter first name");
    }

    if(!lastName){
      result = false;
      setLastNameError("Please enter last name");
    }

    if(!address){
      result = false;
      setAddressError("Please address");
    }

    if(!phoneNumber){
      result = false;
      setPhoneNumberError("Enter valid phone number");
    }

    if(!emailId || (emailId && !emailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
      result = false;
      setEmailIdError("Enter valid email Id");
    }

    if(!notes){
      result = false;
      setNotesError("Please enter notes");
    }

    if(!category){
      result = false;
      setCategoryError("Please enter category");
    }

    if(!orgName){
      result = false;
      setOrgNameError("Please enter org name");
    }

    if(!websiteUrl || (websiteUrl && !websiteUrl.match("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"))){
      result = false;
      setWebsiteUrlError("Enter valid website url");
    }

    if(!tags){
      result = false;
      setTagsError("Please enter tags");
    }

    return result;
  }

  return (
    <Form className='contact-form-container'>
        <Form.Group className="mb-3" controlId="first-name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={onFirstNameChange}/>
          <Form.Text className="text-muted text-danger">
            {firstNameError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={onLastNameChange} />
          <Form.Text className="text-muted text-danger">
            {lastNameError}
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value={address} onChange={onAddressChange} />
          <Form.Text className="text-muted text-danger">
            {addressError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone-number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" value={phoneNumber} onChange={onPhoneNumberChange} />
          <Form.Text className="text-muted text-danger">
            {phoneNumberError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email-id">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Enter email id" value={emailId} onChange={onEmailIdChange} />
          <Form.Text className="text-muted text-danger">
            {emailIdError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} maxLength={200} type="text" placeholder="Enter notes" value={notes} onChange={onNotesChange} />
          <Form.Text className="text-muted text-danger">
            {notesError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter category" value={category} onChange={onCategoryChange} />
          <Form.Text className="text-muted text-danger">
            {categoryError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="org-name">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type="text" placeholder="Enter org name" value={orgName} onChange={onOrgNameChange} />
          <Form.Text className="text-muted text-danger">
            {orgNameError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="website-url">
          <Form.Label>Website Url</Form.Label>
          <Form.Control type="url" placeholder="Enter website url" value={websiteUrl} onChange={onWebsiteUrlChange} />
          <Form.Text className="text-muted text-danger">
            {websiteUrlError}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="Enter tags" value={tags} onChange={onTagsChange} />
          <Form.Text className="text-muted text-danger">
            {tagsError}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitHandler}> Submit </Button>{' '}
        <Button variant="primary" type="submit" onClick={props.handleClose}> Close </Button>
   </Form>
  );
};

export default ContactForm;
