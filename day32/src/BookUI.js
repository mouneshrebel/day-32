import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookUI() {
    const [detail, setDetail] = useState([]);

    const getDetail = () => {
        fetch("https://63da371319fffcd620c36c33.mockapi.io/book",
        { method: "GET" })
        .then((data) => data.json())
        .then((res) => setDetail(res));
    }
    const navigate = useNavigate();

    useEffect(() => getDetail(), [])
    return (
        <div className='row' >


            <h1> <Tooltip title="Go Back" arrow><Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon />
            </Button></Tooltip>List of Books 📚</h1>


            <div className="col-md-12" style={{ justifyItems: 'center' }}>
                {detail.map((object, index) => (
                    <container>
                        <row>
                            <Card key={index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '50px', marginTop: '50px' }}>
                                <Card.Img variant="top" src={object.avatar} />
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Id No : {object.id}</ListGroup.Item>
                                    <ListGroup.Item>Name : {object.name}</ListGroup.Item>
                                    <ListGroup.Item>Rating : {object.rating}</ListGroup.Item>
                                    <ListGroup.Item>Summary : {object.summary}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Tooltip title="Information" arrow><Button variant="primary"><InfoIcon onClick={() => navigate(`/bookdetail/${object.id}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="Edit" arrow><Button variant="success"><EditIcon onClick={() => navigate(`/editbook/${object.id}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="delete" arrow><Button variant="danger" onClick={() => {
                                        fetch(`https://63da371319fffcd620c36c33.mockapi.io/book/${object.id}`, { method: "DELETE" })
                                        .then(() => getDetail());
                                             }}
                                    >
                                         <DeleteIcon /></Button></Tooltip>&nbsp;&nbsp;
                                        </Card.Body>
                            </Card>
                        </row>
                    </container>
                ))}
            </div>
        </div>
    );
}
export default BookUI;