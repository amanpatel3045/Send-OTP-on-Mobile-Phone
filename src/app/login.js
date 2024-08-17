'use client'

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { app } from './config'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('')
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);

    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        window.RecaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': (response) => {

            },
            'expired-callback': () => {

            }
        })
    }, [auth]);



    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    }


    const handleSendOtp = async () => {
        try {
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.RecaptchaVerifier)
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');
            alert('OTP has been sent');

        } catch (error) {
            console.error(error)
        }
    };

    const handleOTPSubmit = async () => {
        try {
            await confirmationResult.confirm(otp);
            setOtp('');
            router.push('/dashboard');
        } catch (error) {
            console.error(error)
        }
    };


    return (
        <div>

            {!otpSent ? (
                <div id="recaptcha-container">

                </div>
            ) : null}

            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter Phone Number With Country Code"
            />

            <input
                type="text"
                value={otp}
                onChange={handleOTPChange}
                placeholder="Enter OTP"
            />

            <button
                onClick={otpSent ? handleOTPSubmit : handleSendOtp}

            >
                {otpSent ? 'Submit OTP' : 'Send OTP'}
            </button>

        </div>
    )












}