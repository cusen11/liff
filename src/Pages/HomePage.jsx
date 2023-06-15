import React, { useState } from 'react'; 
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
    const [disable, setDisable] = useState(true)
    const [loadings, setLoadings] = useState([]);
    const [url, setUrl] = useState()
     
    useEffect(() => {   
        const image = new Image();
        image.src = bg
        image.onload = () => {
          canvas.current.getContext("2d").drawImage(image, 0, 0, width, height);
          setUrl(canvas.current.toDataURL()) 
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
      if(e.target.value.length >= 1){
        setTimeout(()=>{
          const image = new Image();
          image.src = bg 
          canvas.current.getContext("2d").drawImage(image, 0, 0, width, height);  
          createText(e.target.value) 
          setDisable(false)
          setUrl(canvas.current.toDataURL())
        },500)
      }else{
        setTimeout(()=>{
          setDisable(true)
        },500)
        setUrl(canvas.current.toDataURL())
      }
      
    }
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
  
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 2000);
    };
    const downloadImage = ()=>{   
      enterLoading(1)
      setTimeout(() => {
        navigate('/dowload', { state: { link: canvas.current.toDataURL() } }); 
      }, 2000); 
    }
    return (
        <>
            <img src={url} alt="" />
            <div style={{textAlign:'center',marginBottom:'20px',position:'absolute',    left: '50%',transform: 'translate(-50%, 0px)',top: '2%',background: '#cccc',padding: '10px',width: '70%',borderRadius: '20px'}}>          
              <h3>Enter your signature</h3>
              <Input onChange={(e)=> handleChangeText(e)} style={{width:'80%',margin:'10px auto'}} placeholder="Enter your signature" />
              <Button type='primary' loading={loadings[1]} disabled={disable} onClick={()=>downloadImage()}>View Image</Button> 
            </div>
            <canvas hidden ref={canvas} width={width} height={height} />
            
            
        </>
    );
}

export default HomePage;