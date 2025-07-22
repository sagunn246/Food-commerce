import React, { useRef, useState } from 'react'
import TextInput from '../../InputFields/TextInput'
import OrangeButton from '../../Button/OrangeButton';

const UserDetails = () => {
    const [error, setError] = useState(0);
    const name = useRef();
    const contact = useRef();
    const address = useRef();

    const handleClick = () => {
        const nameVal = name.current?.value?.trim();
        const contactVal = contact.current?.value?.trim();
        const addressVal = address.current?.value?.trim();
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        const contactRegex = /^[0-9]{7,15}$/;
        const addressRegex = /^.{3,}$/;

        if (!nameRegex.test(nameVal)) {
            setError(1);
        } else if (!contactRegex.test(contactVal)) {
            setError(2);
        } else if (!addressRegex.test(addressVal)) {
            setError(3);
        } else {
            setError(0);
        }
    };

    return (
        <div>
            <div>  <TextInput label={"Name:"} placeholder={"Enter your name"} ref={name} error={error == 1 && true} /></div>
            <div>  <TextInput label={"Contact:"} placeholder={"Enter your contact "} ref={contact} error={error == 2 && true} /></div>
            <div>  <TextInput label={"Address:"} placeholder={"Enter your address "} ref={address} error={error == 3 && true} /></div>
            <div className='flex justify-center mt-15'><OrangeButton title={"Proceed"} onClick={() => handleClick((prev)=>!prev)} /></div>
        </div>
    )
}

export default UserDetails
