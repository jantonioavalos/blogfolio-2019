import React from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"

function Intro() {
  return (
    <div className="container my-4">
      <Link to="/about">
        <img
          width="250"
          className="rounded-circle author-img mx-4 mb-4"
          src="https://scontent.fgdl4-1.fna.fbcdn.net/v/t1.0-9/68607264_2538087419562579_8482975883261378560_n.jpg?_nc_cat=103&_nc_oc=AQkXTAQPoeufmwy8XrnLtB7XT0qd9zr6XS0vPbfvHNr1r7gODQ1EXwnurOH5gkdJHHs&_nc_ht=scontent.fgdl4-1.fna&oh=c56466acdeb3c90e46720972c358f17b&oe=5DFB1518"
          alt="author-img"
        />
        <h2 className="card-title text-info font-weight-bold">
          Hey! I'm J. Antonio Avalos
        </h2>
      </Link>
      <p className="card-subtitle mt-2">UX Engineer based on Mexico.</p>
      <hr />
      <SocialIcon url="github.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="twitter.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="instagram.com/jantonioavalos" className="mr-4" />
      <SocialIcon url="medium.com/jantonioavalos" className="mr-4" />
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
