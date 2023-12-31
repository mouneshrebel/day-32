import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";


const userValidationSchema = yup.object({
    avatar: yup.string()
        .min(4, "Paste a valid url✌")
        .required("Image is mandatory 🤷‍♀️😁"),
    Name: yup.string()
        .min(2, "Please enter valid name✌")
        .required("Name is mandatory 🤷‍♀️😁"),
    Age: yup.number()
        .min(0, "Please Enter valid Age✌").max(100)
        .required("Age is mandatory 🤷‍♀️😁"),
    Email: yup.string()
        .min(10, "Please enter valid email✌")
        .required("Email is mandatory 🤷‍♀️😁"),
    Address: yup.string()
        .min(5, "Please Enter your Address✌")
        .required("Address is mandatory 🤷‍♀️😁"),
    ContactNumber: yup.string().phone("IN").required('Number is mandatory')
    
});

export default function AddMember({ detail, setDetail }) {
    const formik = useFormik({
        initialValues: {
            avatar: "",
            Name: "",
            Age: "",
            Email: "",
            Address: "",
            ContactNumber: "",
        },
        validationSchema: userValidationSchema,
        onSubmit: (newUser) => {
            createUser(newUser);
        },
    });
    const navigate = useNavigate();

    const createUser = (newUser) => {
        console.log("createUser", newUser);
        axios.post("https://63da371319fffcd620c36c33.mockapi.io/teachers",(newUser))
        .then((res)=>{console.log(res.data)
        navigate('/members')
        setDetail([...detail,newUser])
        })
        
    };
    return (
        <form onSubmit={formik.handleSubmit} style={{ marginLeft: '100px', marginTop: '50px' }} className="add-user-form">
            <h1 style={{ color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>Fill the below details to add a Member 🧑🏻👩🏻</h1><br />
            <TextField
                id="avatar"
                name="avatar"
                label="Image"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.avatar}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.avatar && formik.errors.avatar ? formik.errors.avatar : ""}
            <br />
            <TextField
                id="Name"
                name="Name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.Name && formik.errors.Name
                ? formik.errors.Name
                : ""}
            <br />
            <TextField
                id="Age"
                name="Age"
                label="Age"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Age}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.Age && formik.errors.Age
                ? formik.errors.Age
                : ""}
            <br />
            <TextField
                id="Email"
                name="Email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.Email && formik.errors.Email
                ? formik.errors.Email
                : ""}
            <br />
            <TextField
                id="Address"
                name="Address"
                label="Address"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Address}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.Address && formik.errors.Address
                ? formik.errors.Address
                : ""}
            <br />
            <TextField
                id="ContactNumber"
                name="ContactNumber"
                label="ContactNumber"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ContactNumber}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.ContactNumber && formik.errors.ContactNumber
                ? formik.errors.ContactNumber
                : ""}
            <br />
            <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={createUser}
            >
                Add New User
            </Button>&nbsp;&nbsp;

            <Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </form>
    );
}