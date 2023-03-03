import React, { useEffect, useState } from 'react';
import HomeScreen from './Home';
import UniqueBill from './UniqueBill';
import firebase from '../index'
import { GoogleAuthProvider } from "firebase/auth";
import '../index.css';


function Bills() {
    const [showUniqueBill, setShowUniqueBill] = useState(false);
    const [billTitle, setBillTitle] = useState('');
    const [billText, setBillText] = useState('');
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)
    const [selectedBill, setSelectedBill] = useState(null); // new state variable

    const ref = firebase.firestore().collection("Bills")

    function getData(){
        ref.onSnapshot(querySnapshot => {
        const bills = []
        querySnapshot.forEach((doc) => {
            bills.push({...doc.data(), id: doc.id})
        })
        setdata(bills)
        setloader(false)
        })
    }

    useEffect(() => {
        getData()
    },[])

    const handleCardClick = (title) => {
        const selectedBill = data.find((bill) => bill.title === title);
        setSelectedBill(selectedBill.id); // set selected bill id
        setBillTitle(selectedBill.title);
        setBillText(selectedBill.bill);
        setShowUniqueBill(true);
    };
    

    const handleBackClick = () => {
        setShowUniqueBill(false);
    };
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            // Handle errors here
            console.log(error);
        });
    };

    return (
        <div>
            {!showUniqueBill ? (
                <HomeScreen handleCardClick={handleCardClick} data={data}/> // pass data to HomeScreen
            ) : (
                <div>
                {loader === false && (data.map((bill) => {
                    if (bill.id === selectedBill) { // filter bills by selected bill id
                    return (
                        <UniqueBill key={bill.id} billId={bill.id} billTitle={bill.title} billText={bill.bill} handleBackClick={handleBackClick} />
                    );
                    }
                }))}
                </div>
            )}
        </div>
    );
}

export default Bills;