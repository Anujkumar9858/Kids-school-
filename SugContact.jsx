import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="container"  style={{marginLeft:"80px",marginTop:"8rem"}}>
            <div className="text text-center">
                <h4 className=" mt-5" style={{
                    fontSize
                        : "60px"
                }} id="Txt1">Get in Touch </h4>
                <p id="Txt2" style={{ fontSize: "20px" }}>
                    We'd love to hear from you-let's make your child's first
                    step unforgettable!
                </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row" >
                <div className="col-md-6">
                    <h4 style={{ fontSize: "24px", color: "#6d4ddf" }} id="Txt2">Call, Write or Visit Us :</h4>
                    <p className="mainTxt">We’re always here to answer your questions and
                        sp welcome you with a smile!</p>
                    <br />
                    <h4 id="Txt2" style={{ fontSize: "20px", color: "#6d4ddf" }}> <FaPhoneAlt />
                    Phone: <span style={{ color: "black" }}> +91 98765 43210</span></h4>
                    <br />
                    <h4 id="Txt2" style={{ fontSize: "20px", color: "#6d4ddf" }}> <span><MdEmail /></span>Email: <span style={{ color: "black" }}> playschool@gmail.com</span></h4>
                    <br />
                    <h4 id="Txt2" style={{ fontSize: "20px", color: "#6d4ddf" }}> <span><FaLocationDot /></span>Address: <span style={{ color: "black" }}> 123, Rainbow Lane,
                        Happy Town, India
                        400001</span></h4>
                </div>
                <div className="col-md-6" >
                    <br />
                    <div style={{ height: "500px", width: "400px", backgroundColor: "#000000",borderRadius:"20px",marginBottom:"0px",marginLeft:"150px"}}>
                        <br />
                        <h4 className="text-center " id="Txt2"style={{color:"white"}}>Reach out to us-</h4>
                        <br />
                        <br />
                        <div className="text-center">
                            <input type="text" placeholder="Name" style={{width:"350px",height:"50px",borderRadius:"10px"}} />
                            <br />
                            <br />
                            <input type="number" placeholder="Phone Number" style={{width:"350px",height:"50px",borderRadius:"10px"}} ></input>
                            <br />
                            <br />
                            <input type="email" placeholder="Email" style={{width:"350px",height:"50px",borderRadius:"10px"}}/>
                        </div>
                        <br />
                        <br />
                        <div className="text-center">
                            <button style={{height:"40px",width:"100px",borderRadius:"15px ",backgroundColor:"#6d4ddf",color:"white"}}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}