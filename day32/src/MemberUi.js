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
import axios from 'axios';

function MemberUi() {
    const [detail, setDetail] = useState([]);
    const getDetail = () => {
        axios.get("https://63da371319fffcd620c36c33.mockapi.io/teachers")
        .then((res)=>setDetail(res.data))
        .catch((err)=>console.log(err));
    }

    const navigate = useNavigate();

    useEffect(() => getDetail(), [])
    return (
        <div className='row' >

            
        <h1> <Tooltip title="Go Back" arrow><Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon />
            </Button></Tooltip>List of Members 👩🏻‍🦱👨🏻 </h1>


            <div class="col-md-12" style={{ justifyItems: 'center' }}>
                {detail.map((object, index) => (
                    <container>
                        <row>
                            <Card key={index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '50px', marginTop: '50px' }}>
                                <Card.Img variant="top" src={object.avatar} />
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Id No : {object.id}</ListGroup.Item>
                                    <ListGroup.Item>Name : {object.Name}</ListGroup.Item>
                                    <ListGroup.Item>Age : {object.Age}</ListGroup.Item>
                                    <ListGroup.Item>Email : {object.Email}</ListGroup.Item>
                                    <ListGroup.Item>Address : {object.Address}</ListGroup.Item>
                                    <ListGroup.Item>Contact Number : {object.ContactNumber}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Tooltip title="Information" arrow><Button variant="primary"><InfoIcon onClick={() => navigate(`/memberdetail/${object.id}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="Edit" arrow><Button variant="success"><EditIcon onClick={() => navigate(`/editmember/${object.id}`)} /></Button></Tooltip>&nbsp;&nbsp;

                                    <Tooltip title="delete" arrow><Button variant="danger" onClick={() => {
                                        axios.delete(`https://63da371319fffcd620c36c33.mockapi.io/teachers/${object.id}`)
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
export default MemberUi;