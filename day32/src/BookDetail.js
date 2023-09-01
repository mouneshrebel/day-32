import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, Image, Stack, Button, Text, Heading, CardBody, CardFooter } from '@chakra-ui/react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export default function BookDetail() {
    const { bookid } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch(`https://63da371319fffcd620c36c33.mockapi.io/book/${bookid}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((us) => {
                setBook(us);
            });
    });

    return (
        <div>
            <h1 style={{ marginLeft: '100px', marginTop: '10px', color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Detailed page of a Book 📙📚✨</h1>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{ marginLeft: '50px', marginTop: '50px', width: '100%', height: '100%' }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={book.avatar}
                    alt='Caffe Latte'
                    style={{ width: '500px' }}
                />

                <Stack>
                    <CardBody style={{ marginLeft: '30px' }}>
                       
                        <Text py='2'>
                            <Heading size='md'>Name              : {book.name}</Heading><br />
                            <Heading size='md'>Rating            : {book.rating}</Heading><br />
                            <Heading size='md'>Summary           : {book.summary}</Heading><br />
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