import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Spinner } from '@chakra-ui/react';
import axios from "axios";


export default function EditBook() {
    const { bookid } = useParams();
    const [book, setBook] = useState(null);
    useEffect(() => {
        // fetch(`https://63da371319fffcd620c36c33.mockapi.io/book/${bookid}`, {
        //     method: "GET",
        // })
        //     .then((data) => data.json())
        //     .then((usdata) => {
        //         setBook(usdata);
        //         console.log(usdata);
        //     });
        axios.get(`https://63da371319fffcd620c36c33.mockapi.io/book/${bookid}`)
        .then((usdata)=>{
            setBook(usdata.data);
        });
    });
    return book ? <EditBookForm book={book} /> : <Spinner style={{ height: "50px", width: "50px" }} />

}

function EditBookForm({book}) {
    
    const [avatar, setAvatar] = useState(book.avatar);
    const [name, setName] = useState(book.name);
    const [rating, setRating] = useState(book.rating);
    const [summary, setSummary] = useState(book.summary);
   

const navigate = useNavigate();

    return (
        <div className="add-book-form" style={{ marginLeft: '50px', marginTop: '50px' }}>
            <h1 style={{ color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Edit and Save Book 📚📙✨</h1><br />
            <TextField
                label="image"
                variant="outlined"
                onChange={(event) => setAvatar(event.target.value)}
                type="text"
                placeholder="Enter image url"
                value={avatar}
                style={{ width: '800px' }}
            /><br /><br />
            <TextField
                label="Name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter your name"
                value={name}
                style={{ width: '800px' }}
            /><br /><br />
            <TextField
                label="Age"
                variant="outlined"
                onChange={(event) => setRating(event.target.value)}
                type="text"
                placeholder="Enter your Age"
                value={rating}
                style={{ width: '800px' }}
            /><br /><br />
            <TextField
                label="Email"
                variant="outlined"
                onChange={(event) => setSummary(event.target.value)}
                type="text"
                placeholder="Enter valid email"
                value={summary}
                style={{ width: '800px' }}
            /><br /><br />
            <Button
                color="success"
                variant="contained"
                onClick={
                    () => {
                        const updatedBook = {
                            avatar: avatar,
                            name: name,
                            rating: rating,
                            summary: summary,
                         };
                        fetch(`https://63da371319fffcd620c36c33.mockapi.io/book/${book.id}`, {
                            method: "PUT",
                            body: JSON.stringify(updatedBook),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then((data)=>data.json())
                            .then(()=>navigate("/books"));
                        }
                }
            >
                SAVE BOOK
            </Button>&nbsp;&nbsp;&nbsp;

            <Button color="success"
                variant="contained"
                onClick={() => { navigate(-1) }}
            >
                <ArrowBackIosIcon /> BACK
            </Button>
        </div>
    )
}
