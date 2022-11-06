import './about.css';
import { useState } from "react";
import img from './images/rio.JPG'


function Me() {
    const [me, setMe] = useState({
        name : "Rio Bintang Sadewa",
        nim : "320200401024",
        university : "Universitas Pertahanan Republik Indonesia",
        hobbies: "Playing basketball, do some Gaming, sometimes do some Cooking, Creative Design on Design Software, and Photography"
    });
   
    return (
        <>
        <div class="bg">
            <div class="container1">
                <div class = "about" align = "center">
                        <h1>ABOUT</h1>
                        <h2> Greetings, Hi i'm the creator! My name is {me.name} </h2>
                        <p>
                            I am from {me.university} with my NIM is {me.nim}.
                            There are many things that i love to do, such as, {me.hobbies}
                        </p>
                        <p>
                            This website is one of assigment of Web Development's. Not a Fully working website and it still under development for educational and practical purpose only. The Name of this website is Netlab Bookstore That contains about books and it's price.
                        </p>
                </div>
            </div>
        </div>   
    </>  
    )
}

export default Me;
