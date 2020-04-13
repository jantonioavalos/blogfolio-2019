import React from "react"
import Page from "../components/PageLayout"
import Helmet from "react-helmet"

function About() {
  return (
    <Page>
      <Helmet>
        <title>About | jantonioavalos.com</title>
      </Helmet>
      <div className="container about my-5">
        <h1 className="font-weight-bold">J. Antonio Avalos</h1>
        <h2>Product Designer | UX Engineer</h2>
        <h3 className="mt-4">Hey there!</h3>
        <p>       
          I'm Juan Antonio, an engineer in UX living at Guadalajara. Since I was little I always wanted to open my toys to see how they worked, even sometimes they wouldn't work again...
        </p><p>
          That's why when I grew up I studied a <em>technologist degree</em> in electronics, so I could build my own devices. But the more I created projects the more I liked programming -the soul of my inventions. So at university, I went for computer systems engineering.
        </p><p>
          I started working in the tech industry since I began college. It helped me to realize how the real world was and squeeze my teacher's experience. It was in the middle of this environment that I ran into the question <strong>"Does this software really people's work easier or it complicates more their life?"</strong>.
        </p><p>
          After much thought, it was while creating a desktop app when I discovered a UX design online course, and I fell in love with it. Because I understood it wasn't device building or software programming but <a href="https://platzi.com/@jantonioavalos/" target="_blank">self-learning</a> and strategic problem-solving what really filled me. <strong>And, what is more complex than finding a person's real problem and building a multidisciplinary team solution that can even improve his or her talents?!</strong> 
        </p><p>
          Today, in the middle of coffee and books at my desk, I continue working in the hardware industry but I've been focusing my career on product design and UX engineering so I can become a UX Architect, who lead the transformation of people's needs into well-designed solutions.
        </p><p>
          So, that's my story. What's yours? <a href="mailto:hey@jantonioavalos.com">Contact me</a> and I hope we can meet soon at any social activity on technology and design. Or even more interesting, at a new project proposal.          
        </p>
      </div>
    </Page>
  )
}

export default About
