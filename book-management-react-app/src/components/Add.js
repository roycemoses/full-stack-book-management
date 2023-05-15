import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Add()
{
    const[imageURL, setImageURL] = useState('');
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState(0);
    const[errorMessage, setErrorMessage] = useState(null);

    let navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // hide other events
        
        const ids = uuid(); // creating unique id (string)
        let uniqueId = ids.slice(0,8);
        console.log(uniqueId);

        // take form details and push it into the book table in DB
        let a = title, b = price, c = imageURL;
        
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: uniqueId, title: a, price: b, imageURL: c })
        };
        fetch('http://localhost:8080/api/books', requestOptions)
        .then(async () => {
            navigation("/");
        })
        .catch(error => {
            setErrorMessage(error.toString());
            console.error('There was an error!', error);
        });

        navigation('/');
    }

    return (
            <div>
                {errorMessage}
                <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                    <Form.Group className='mb-3' controlId='formImageURL'>
                        <Form.Control type='text' placeholder='Enter Image URL' value={imageURL} required onChange={(e) => setImageURL(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formTitle'>
                        <Form.Control type='text' placeholder='Enter Title' required onChange={(e) => setTitle(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formPrice'>
                        <Form.Control type='number' placeholder='Enter Price' required onChange={(e) => setPrice(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
                </Form>
            </div>
    );
}

export default Add;
