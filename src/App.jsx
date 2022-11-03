// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css";
import user from "./user.json";
import myPhoto from "./photo.jpg";

function App() {
  return (
    <main className="app">
      <h1>My first react app</h1>
      <h2>A few facts about me</h2>

      <section className="personal__information">
        <div className="container">
          <img src={myPhoto} alt="Marina Orishchuk" className="photo__img" />
        </div>
        <div className="container">
          <p>My name: {user.name}</p>
          <p>My age: {user.age}</p>
          <p>My hometown: {user.hometown}</p>
          <p>
            <a href={`mailto:${user.email}`}>Email me</a>
          </p>
        </div>
      </section>

      <h2>Professional information</h2>
      <p>My professional experience: {user.professional_experience}</p>

      <section className="professional__information">
        <div className="container">
          <h3>Hard skills (from 0 to 10):</h3>
          <p>HTML: {user.skills.html}</p>
          <p>CSS: {user.skills.css}</p>
          <p>JS: {user.skills.js}</p>
          <p>Google Apps Script: {user.skills.gas}</p>
        </div>
        <div className="container">
          <h3>Soft skills:</h3>
          <ul>
            {user.soft_skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <h2>My hobbies</h2>

      <section className="hobbies">
        <ul>
          {user.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
