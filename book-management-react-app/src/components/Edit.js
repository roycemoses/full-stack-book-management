import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Edit()
{
    const[id, setId] = useState('');
    const[imageURL, setImageURL] = useState('');
    const[title, setTitle] = useState('');
    const[price, setPrice] = useState(0);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setImageURL(localStorage.getItem('imageURL'));
        setTitle(localStorage.getItem('title'));
        setPrice(localStorage.getItem('price'))
    }, [])

    let navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // hide other events

        let currentId = id;
        let a = title;
        let b = price;
        let c = imageURL;

        // PUT request using fetch with error handling
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: currentId, title: a, price: b, imageURL: c})
        };
        fetch('http://localhost:8080/api/books', requestOptions)
            .then(async () => {
                navigation("/");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            <Form className='d-grid gap-2' style={{margin:"15rem"}}>
                <Form.Group className='mb-3' controlId='formImageURL'>
                    <Form.Control type='text' placeholder='Enter Image URL' value={imageURL} required onChange={(e) => setImageURL(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formTitle'>
                    <Form.Control type='text' placeholder='Enter Title' value={title} required onChange={(e) => setTitle(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPrice'>
                    <Form.Control type='text' placeholder='Enter Price' value={price} required onChange={(e) => setPrice(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
    );
}

export default Edit;