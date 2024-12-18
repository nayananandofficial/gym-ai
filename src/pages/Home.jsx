import React from "react";
import Header from "../components/Header";
import ArrowButton from "../components/ArrowButton";


const Home = () => {

     
    return(

        <section id="home" className="h-screen w-full -z-10">
            <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" src="src/assets/full-video.mp4" autoPlay loop muted></video>
            <Header />
            <ArrowButton href="#about"/>
        </section>

    )
}

export default Home;