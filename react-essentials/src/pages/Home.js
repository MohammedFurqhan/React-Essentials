import React from "react";
import logo from '../logo.svg';
const HomePage =()=>{        
    var i=0;
    var images=[];
    var time =1500;
    images[0]="https://furqhantask1.netlify.app/images/hero1.svg";
    images[1]="https://furqhantask1.netlify.app/images/hero2.svg";
    images[2]="https://furqhantask1.netlify.app/images/hero3.svg";

    function slider(){
       
        document.slide.src=images[i];
        if(i<images.length -1){
            i++;
        }
        else{
            i=0;
        }
        setTimeout(slider,time)
    }
    window.onload=slider;

    
    return(
        <div id="slider" style={{textAlign:"center" , marginTop:"10rem"}}>
            <figure>
                <img src={slider} name="slide" alt="helo" id="slide" width="400" height="200" />
            </figure>
        </div>
    )
}

export default HomePage;