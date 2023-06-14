import React from 'react'; 
import bg from '../Assets/images/bg.png';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();
    const canvas = useRef() 
    const width  = window.innerWidth;
    const height  = window.innerHeight; 
    
     
    useEffect(() => {   
        const image = new Image();
        image.src = bg
        image.onload = () => {
          canvas.current.getContext("2d").drawImage(image, 0, 0, width, height); 
        }; 
    }, [width,height]);
    const createText = (text)=>{
      
      if(canvas.current.getContext("2d") !== null){   
        canvas.current.getContext("2d").font = "50px Arial";
        canvas.current.getContext("2d").textAlign='right';
        canvas.current.getContext("2d").fillText(text,width-80 , height-80);
      }
    }
    const handleChangeText = (e)=>{ 
      setTimeout(()=>{
        const image = new Image();
        image.src = bg 
        canvas.current.getContext("2d").drawImage(image, 0, 0, width, height);  
        createText(e.target.value)  
      },2000)
    }
    const downloadImage = ()=>{  
      navigate('/dowload', { state: { link: canvas.current.toDataURL() } });      
    }
    return (
        <>
            <canvas ref={canvas} width={width} height={height} />
    
            <Input onChange={(e)=> handleChangeText(e)} placeholder="Enter your signature" />
            <Button onClick={()=>downloadImage()}>Dowload Image</Button> 
        </>
    );
}

export default HomePage;