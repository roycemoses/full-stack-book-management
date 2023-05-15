import React, { useState, useEffect } from 'react';
import {Button, Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import getBooks from './Books';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [Books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        // setBooks() : modifies the current state variable 'Books' (array)
        // getBooks() : imported from Books.js, it returns the Book table from the DB
        setBooks(getBooks().then(response => setBooks((response))));
    }, [])

    let navigation = useNavigate();

    const handleDeleteBook = (id) => {
        let index = Books.map(function(e){
            return e.id;
        }).indexOf(id);
        Books.splice(index,1);

        fetch('http://localhost:8080/api/books/id='+id, { method: "DELETE"})
        .then(async () => {
            navigation('/');
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    const handleEditBook = (id, imageURL, title, price) => {
        localStorage.setItem('id', id);
        localStorage.setItem('imageURL', imageURL);
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
    }

    return (
        <React.Fragment>
            <br />
            <h1>Welcome to Royce's Book Management App!</h1>
            <br /><br />
            <Link className='d-grid gap-2' to={'/add'}>
                    <Button size="lg btn-success">Add book</Button>
            </Link>
            <br /><br /><br />
            <div style={{marginRight:"50rem", marginLeft:"15rem"}}>
                <Form className='d-grid gap-2'>
                <Form.Group className='mb-3' controlId='query'>
                    <Form.Control type='text' placeholder='Search' value={query} required onChange={(e) => setQuery(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                </Form>
            </div>
            <div style={{margin:"10rem", marginTop:"2rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                Books && Books.length > 0 ?
                                Books.map((item) => {
                                    return(
                                        (item.title.toString().toLowerCase().includes(query.toLowerCase())) &&
                                        <tr key={item.id}>
                                            <td>
                                                <div>
                                                    <img alt="not found" width={"250px"} src={item.imageURL} />
                                                </div>
                                            </td>
                                            <td>{item.title}</td>
                                            <td>${Number.parseFloat(item.price).toFixed(2)}</td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button className='px-4' onClick={() => handleEditBook(item.id, item.imageURL, item.title, item.price)}>Edit</Button> 
                                                </Link>
                                                &nbsp;
                                                <Button className='px-3 btn-danger' onClick={() => handleDeleteBook(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr><td>No entries found</td></tr>
                            }
                        </tbody>
                </Table>
                <br />
            </div>
        </React.Fragment>
    )
}

export default Home;