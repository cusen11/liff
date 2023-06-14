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
    let context = null;
    const crawCanvas = ()=>{
        context = canvas.current.getContext("2d");
        const image = new Image();
        image.src = bg
        image.onload = () => {
          context.drawImage(image, 0, 0, width, height); 
        }; 
    }
    useEffect(() => {  
      crawCanvas()
    }, []);
    const createText = (text)=>{
      
      if(context !== null){   
        context.font = "50px Arial";
        context.textAlign='right';
        context.fillText(text,width-80 , height-80);
      }
    }
    const handleChangeText = (e)=>{ 
      setTimeout(()=>{
        const image = new Image();
        image.src = bg 
        context.drawImage(image, 0, 0, width, height);  
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