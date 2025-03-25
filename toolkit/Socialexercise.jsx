import React from 'react'
import image1 from "./happy.png"
import image2 from "./Angry.png"
import image3 from "./crying.png"
import image4 from "./Scream.png"
import image5 from "./Surprise.png"
import "./Socialexercise.css"

export const Socialexercise = () => {
  return (
    <div className="ex">
      <h1>Social Skill Exercise</h1>
    <div className="exercise">
    <div className="emotions">
       <h3>Mood Tracker</h3>
       <p>The mood tracker allows them to log emotions, track patterns, and gain insights into their mental well-being. It provides visual analytics and suggestions based on mood trends.</p>
       <div className="happy"><img src={image1} alt="happy"/><h4>Happy</h4></div>
       <div className="angry"><img src={image2} alt="happy"/><h4>Angry</h4></div>
       <div className="crying"><img src={image3} alt="crying"/><h4>Crying</h4></div>
       <div className="scream"><img src={image4} alt="scream"/><h4>Scream</h4></div>
       <div className="surprise"><img src={image5} alt="surprise"/><h4>Surprise</h4></div>
    </div>
        <div className="greetings">
       <h3>Greetings</h3>
       <p>A personalized greeting system offers warm, adaptive messages to create a welcoming space for neurodiverse users.</p>
       <iframe  src="https://www.youtube.com/embed/g57ufLcYD8E?si=jLLOa9c9nNUIpjRH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><h3>Hello</h3>
       <iframe  src="https://www.youtube.com/embed/AHvd9ccixvI?si=O57SUCqeR27012_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><h3>Thank you</h3>
       <iframe  src="https://www.youtube.com/embed/tPWfiRmyQow?si=zrVm6Cwvvm40naWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><h3>Compliment</h3>
       <iframe   src="https://www.youtube.com/embed/qzawsRCwvj8?si=aAY3rit1Jk95Ni8W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><h3>Order</h3>
        </div>
     
    </div>
   
    </div>
  )
}
