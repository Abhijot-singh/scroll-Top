import React,{useState, useEffect} from 'react';
import {ReactComponent  as Icon} from "../icons/scroll-up 2.svg"
import "../styles/App.css"
function Scrollbutton() {
   const[visible, setvisible] = useState(false);
    function toggleVisiblity(){
        if(window.pageYOffset > 300){
            setvisible(true);
        }
        else{
            setvisible(false);
        }
    }
    function scrollbutton(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisiblity);
        return ()=>{
            window.removeEventListener('scroll', toggleVisiblity)
        }
    },[]);
    return (
        <div className={visible? "class-one"  : "class-two"}>
            <Icon className="svg-icon" onClick={scrollbutton}/>
        </div>
    );
}

export default Scrollbutton;