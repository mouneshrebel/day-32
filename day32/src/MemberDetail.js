import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, Image, Stack, Button, Text, Heading, CardBody, CardFooter } from '@chakra-ui/react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";


export default function MemberDetail() {
    const { userid } = useParams();
    const navigate = useNavigate();
    const [teacher, setteacher] = useState({});

    useEffect(() => {
        axios.get(`https://63da371319fffcd620c36c33.mockapi.io/teachers/${userid}`)
            .then((us) => { setteacher(us.data) })
    });

    return (
        <div>
            <h1 style={{ marginLeft: '100px', marginTop: '10px', color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Detailed page of a Member 😁 </h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{ marginLeft: '50px', marginTop: '50px', width: '100%', height: '100%' }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={teacher.avatar}
                    alt='Caffe Latte'
                    style={{ width: '500px' }}
                />

                <Stack>
                    <CardBody style={{ marginLeft: '30px' }}>
                       
                        <Text py='2'>
                            <Heading size='md'>Name           : {teacher.Name}</Heading><br />
                            <Heading size='md'>Age            : {teacher.Age}</Heading><br />
                            <Heading size='md'>Email          : {teacher.Email}</Heading><br />
                            <Heading size='md'>Address        : {teacher.Address}</Heading><br />
                            <Heading size='md'>Contact Number : {teacher.ContactNumber}</Heading><br />
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button
                            style={{ marginLeft: '30px' }}
                            onClick={() => navigate(-1)}
                            variant="contained"

                        >
                            <ArrowBackIosIcon />
                            BACK
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}
