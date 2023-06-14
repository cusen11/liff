import React from 'react';
import { useLocation } from 'react-router-dom';

function DowloadPage() {
    const {state} = useLocation(); 
    return (
       <img src={state.link} alt="" />
    );
}

export default DowloadPage;