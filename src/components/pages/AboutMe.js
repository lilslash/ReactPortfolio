import React from 'react';
import Me from '../../resizedMe.jpg'


export default function AboutMe() {
  return (
    <div class ="body">
      <h1 class='textColor'>Maximilian (Max) Wittner</h1>
      <img class='center' src={Me} alt="reigen"></img>
      <p class='textColorP'>
   I was born in long island, New York and grew up in Casa Grande, Arizona. I am a 20 year old who has been around tech my whole life and decided to pursue a career in web development. Before starting school I worked a full time job at a distribution center
     I have experience working with React and Javascript.
      </p>
    </div>
  );
}
