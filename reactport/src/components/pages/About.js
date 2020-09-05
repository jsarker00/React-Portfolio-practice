import React from "react";
import Footer from "../Footer";
import "../../styles/style.css";
function About() {
  return (
    <div>
      <main class="container" id="main-section">
        <h2>About Me</h2>
        <hr />
        <div class="row">
          <div class="col">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEmhJ3pgYkLCg/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=CO5STGmoJmCasSQ5pIRgmD_Gg4WDbonojQw7HxMA2F4"
              class="rounded float-left"
              id="profile-image"
              alt="profileimage"
            />
            <p>
              Hi! My name is Tanmay Sarker, but you can call me Joy! I am a full-stack web developer
              living in New York City; The best city in the world!!
            </p>
            <p>
              I'm currently a college student majoring in business and would love to be an amazing programmer!
            </p>
            <p>
              I would love to make beautiful and powerful websites that bring smiles to people's faces!
            </p>
            <p>
             I love working out and hanging out with my friends! :)
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default About;