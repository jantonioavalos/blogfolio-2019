import React from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import me from "../images/me.jpg"

function Intro() {
  return (
    <div className="container my-4">
      <Link to="/about">
        <img
          width="250"
          className="rounded-circle author-img mx-4 mb-4"
          src= {me}
          alt="jantonioavalos-picture"
        />
        <h2 className="card-title text-info font-weight-bold">
          J. Antonio Avalos
        </h2>
      </Link>
      <p className="card-subtitle mt-2">
        Product Designer | UX Engineer
      </p>
      <p className="small mt-2">
        Engineer with 3+ years of collaboration with distributed teams in web solutions by user-centered design. 
        Translating business needs into requirements, communicating proposals to product stakeholders from research and data analysis to create testable prototypes in agile environments. 
        With a track record of self-learning to build and present solutions by process analysis.
      </p>
      <hr />
      <SocialIcon url="https://github.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="https://twitter.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="https://instagram.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="https://medium.com/jantonioavalos" className="mr-4" />
    </div>
  )
}

export default Intro

//Technologies used in this project:
{
  /* <h4>Built with</h4>
      <a href="https://reactjs.org/">
        <img
          className="mr-4 mt-3"
          src="https://img.icons8.com/ios/40/00D8FF/react-native-filled.png"
          alt="build-with-icon-1"
        />
      </a>
      <a href="http://gatsbyjs.org/">
        <img
          className="mr-4 mt-3"
          width="40px"
          src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
          alt="build-with-icon-2"
        />
      </a>
      <a href="https://www.netlify.com/">
        <img
          className="mr-4 mt-3"
          width="40px"
          src="https://www.netlify.com/img/press/logos/logomark.png"
          alt="build-with-icon-3"
        />
      </a>
      <a href="https://www.markdownguide.org/">
        <img
          className="mr-4 mt-3"
          src="https://img.icons8.com/office/40/000000/markdown.png"
          alt="build-with-icon-4"
        />
      </a>
      <h6>
        <br />
        Open Sourced on <a href="https://github.com">Github</a>
      </h6> */
}
