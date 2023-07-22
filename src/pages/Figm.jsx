import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import bg from "../assets/vector2.png"
import lg from "../assets/logo.png"

const Container=styled.div`
  height: auto;
 //overflow: auto;
  background-color: #212020 ;
  //background-color: #a3a342;
  overflow: hidden;
  
 .nav_main{
  //background-color: lightcoral;
  display: flex;
  align-items: center;
  padding:15px;
  justify-content : flex-end;

 }
 .links{
  display: flex;
  float: right;
  color: #FFF;
  font-family: Lato;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  padding-right: 32px;
  letter-spacing: 2px;

 }
 .link1{
  margin-right: 10px;
  padding-right: 25px;
  padding-left :25px;
 }
 .icon{
  display : none;
  color: #FFF;
 }

.nav_side{
    
    background-color: grey;
    color: #8fffee;
    position: absolute;
    width: 120px;
    height: 30vh;
    top: 0;
    left: 0;
    transform: translateX(${props=>props.val ? "00px" : "-300px"});
    display: flex;
    
}
.links_side{
  margin-top: 30px;
  padding: 0px;
}
.link2{
  padding: 18px;
}
.second{
  display:flex;
  justify-content: space-around;  
}
.text{
  margin-left:240px;
  margin-top:150px;
}
.h1{
color: #FFF;
font-size: 80px;
font-weight: 700;
line-height: normal;
font-family : 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
height : 25px;
letter-spacing: -1px;
}
.p1{
color: #FFF;
font-family : 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 26px;
font-weight: 100;
letter-spacing: 1.5px;
}
.pic{
  width: 650px;
  height: 600px;
  
}
.vector{
  width: 650px;
  height: 600px;
}
.t{
  color: #63E7DA; 
}
@media (max-width: 800px){
  .text{
    margin-left:520px;
  }
  .h1{
    font-size: 60px;
  }
  .p1{
    font-size: 15px;
  }

}

@media (max-width: 426px){
  .pic{
    display: none;
  }
  .vector{
    display: none;
  }
  
 .text{
  margin-top: 75px;
  margin-left: 25px;
  margin-bottom: 120px;

 }
 .h1{
    font-size: 43px;

  }
  .p1{
    font-size: 13px;
  }
}
.box{
  height: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left : 20px;
}
.box1{
  background-color: #3C3C3C;
  height: 290px;
  width: 250px;
  display :flex;
  flex-direction: column;
  border: 3px solid #63E7DA;
  border-radius: 0px 45px 0px 45px;
  color : white;
  justify-content: center;
  
}
h3{
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin : 10px 0px 0px 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 22px;
}
.p2{
  
  margin : 10px 15px 0px 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 17px;
 
}
@media (max-width :1200px){
  .box{
    padding: 0px 20px 0px 20px;
  }
  .box1{
    height: 250px;
    width: 195px;
  }
  h3{
    font-size: 20px;
  }
  .p2{
    font-size :14px;
  }
}
  @media (max-width:800px){
    .box1{
    height: 170px;
    width: 150px;
  }
  h3{
    font-size: 15px;
  }
  .p2{
    font-size :10px;
  }
  
}
  @media (max-width:426px){

    .box1{
      height: 130px;
      width: 120px;
      border-radius: 0px 18px 0px 18px;
      display: flex;
     
      
    }
    h3{
      font-size: 14px;
      margin-left: 8px;
    }
    .p2{
      font-size : 11px;
      margin: 5px 5px 0px 5px;
    }
    .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -40px;
    padding: 0px 5px 19px 5px;
  }
  }

  .hr{
    border: 1.5px dotted #63E7DA;
    margin-top: 40px;
  }
  .hr2{
    border: 2.4px solid #63E7DA;
    width: 250px;
    margin-top: -10.9px;
    margin-left: 350px;
  }
.h2{
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin : 50px 0px 50px 60px;
font-size: 45px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.offer{
 
  display: flex;
  flex-direction: row;
}
.cont1{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 50px 0px 150px;
    text-align: center;
    align-items: center;
}
.cont2{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
}
.cont3{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    margin: 0px 150px 0px 50px;
}
.txt{
 font-size: 150px;
 fill: #ffffff;
    
}
.main{
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
background-clip: text;
text-align: center;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 22px;
line-break: normal;
font-weight: 600;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 50px 10px 0px 0px;
}
.main1{
    color: rgb(109, 109, 109);
    text-align: center;
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 300;
    line-height: normal;
    margin: 30px 10px 0px;
}


.bottom{
  display: flex;
  width: 100%;
  margin-top: 80px;
 // background-color: green;
}
.left{
 display: flex;
 flex-direction: column;
 align-items: center;
 place-content: center;
 width: 100%;
 margin: 30px 0px 0px -30px;
 //background-color: red ;

}
.pic2{
 // background-color: #63E7DA; 
  height: 150px;
}
.log{
  height: 150px;
  width: 160px;
}
.inp{
  margin: 30px 0px 0px 0px;
  width: 230px;
  height: 30px;
  border: 1px solid  white;
  border-radius: 10px 10px 0px;
  background-color: rgb(25, 26, 29);
  color: white;
  padding: 0px 0px 0px 10px;
}
.but{
    background-color: rgb(99, 231, 218);
    border-radius: 10px 10px 10px 0px;
    outline: none;
    border: none;
    height: 30px;
    width: 60px;
    margin: 0px 0px 0px 10px;
}
.right{
    //background-color: violet;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 30px 80px 0px 90px;
    }
    .top{
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
    .talk{
    color: rgb(99, 231, 218);
    font-family: Satisfy;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }
    .cent{
    color: rgb(217, 217, 217);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 40px;
    }
    .email{
    color: rgb(99, 231, 218);
    display: flex;
    }
    .emaiid{
    color: rgb(99, 231, 218);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
    .insta,.linkd{
    display: flex;
    margin: 50px 0px 0px 45px;
    }
@media (max-width :600px) {
    .icon{
        display: flex;
    }
    .links{
        display: none;
    }
    .h2{
      font-size: 20px;
    }
    .offer{
      display: flex;
      flex-direction :row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0px 0px 0px 5px;
    }
    .cont1,.cont3,.cont2{
      margin: 0px;
      margin-bottom: 50px;
    }
    .svg1{
      width: 40px;
      height: 40px;
    }
    .main{
      font-size: 17px;
    }
    .main1{
      margin-top: 15px;
      font-size: 14px;
    }
    .hr{
      margin-top: 65px;
    }
    .left{
      margin: -55px 0px 0px 0px;
    }
    .log{
      height: 100px;
      width: 100px;
      margin-top: 30px;
    }
    .inp{
      width: 150px;
    }
    .bottom{
      display: flex;
      flex-direction :row;
      flex-wrap: wrap;
      justify-content: space-around;
      
    }
    .top,.talk{
      font-size: 28px;
    }
    .right{
      margin-top: 45px;
    }
    .cent{
      font-size: 15px;
    }
    .emaiid{
      font-size: 18px;
    }
   .linkd{
    margin-left: 10px;
    }



    }
    @media (max-width :260px){
       .hr{
        margin-top: 250px;
       }
       .offer{
        margin-top: 100px;
       }
    }
`

const Figm = () => {
const [Val , setVal]= useState(false);
useEffect (()=>{console.log(Val);},[Val])
  return (
    <Container val={Val}>
      <div className='nav_main'>
        <div className='links'>
          <div className='link1'>HOME</div>
          <div className='link1'>ABOUT</div>
          <div className='link1'>CONTACT</div>
        </div>
      <div className='icon' onClick={()=>setVal(!Val)}>
        <i class="fa-solid fa-bars"></i>
        </div>   
      </div>
      <div className='nav_side'>
        <div className='links_side'>
          <div className='link2'>HOME</div>
          <div className='link2'>ABOUT</div>
          <div className='link2'>CONTACT</div>
        </div>
      </div>
      <div className='second'>
        <div className='text'>
          <h1 className='h1'>VECTOR<span className='t'>UX</span></h1>
          <p className='p1'>we ideate, create <span className='t'>&</span> innovate </p>
        </div>
        <div className='pic'>
        <img className='vector' src={bg} alt="" />
        </div>
      </div>
      
      <div className='box'>
        <div className='box1'><i class="fa-sharp fa-light fa-browsers"></i>
         <h3>UI & UX</h3>
         <p className='p2'>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p></div>
        <div className='box1'>
          <h3>Web & Mobile AppX</h3>
          <p className='p2'>Transforming ideas into exceptional web and mobile app experiences.</p></div>
        <div className='box1'>
         <h3>Design & Creative</h3>
         <p className='p2'>Crafting visually stunning designs that connect with your audience.</p></div>
        <div className='box1'><h3>Development</h3>
         <p className='p2'>Bringing your vision to life with the latest technology and design trends.</p></div>
      </div>
      <hr className='hr'/><hr className='hr2'/>
      <h1 className='h2'>What we offer?</h1>
      <div className='offer'>
        <div className='cont1'><svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none">
         <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path>
         <text className='txt' x="130" y="220">1</text>
         </svg>
         <div className='main'>24/7 Customer Support.</div>
         <div className='main1'>If you have any queries do not wait, we are here for you 24/7.</div>
         </div>
        <div className='cont2'><svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none">
         <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path>
         <text className='txt' x="130" y="220">2</text>
         </svg>
         <div className='main'>Perfection</div>
         <div className='main1'>Perfect Design With Responsive Pages.</div></div>
        <div className='cont3'><svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none">
         <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path>
         <text className='txt' x="130" y="220">3</text>
         </svg>
         <div className='main'>Dedication</div>
         <div className='main1'>Our highly dedicated team ensures the on time completion and delivery of the project.</div>
         </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <div className='pic2'>
          <img className='log' src={lg} alt="" />
          </div>
          <div>
          <input className='inp' type="text" placeholder='write a message'/>
          <button className='but'>send</button>
          </div>        
          </div>
        <div className='right'>
          <div className='top'>Let’s <span class="talk">talk</span> something special.</div>
          <div className='cent'>We seek to push the limitations of creativity to create high-engaging, user-friendly and memorable interactive experiences.</div>
          <div className='email'>
          <h6 className="emaiid">vectorux0@gmail.com</h6>
            <div className='insta'><i class="fa-brands fa-instagram fa-bounce"></i></div>
            <div className='linkd'><i class="fa-brands fa-linkedin fa-bounce"></i></div>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default Figm
