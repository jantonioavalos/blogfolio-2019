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
        <h1 className="font-weight-bold">Hey!! This is J. Antonio Avalos</h1>
        <h2>UX Engineer | Coffee Lover and Devoted Reader</h2>
        <h6 className="my-3">
          I am a creative engineer whose personal goal is to be involved in
          multi-disciplinary teams to develop solutions, so well designed that
          people just worry about their craft, being helped to improve their
          skills.
        </h6>
        <h2>My story</h2>
        <p>
          Since I was a child I always wanted to understand{" "}
          <i>how the things work</i> so I used to broke and dissasembly all my
          toys and (sometimes) re-built them as they were.
          <br /> <br />
          That spirit persisted till my first technical degree on{" "}
          <i>Electronics and Communications</i> where I learned to analize,
          test, design and build prototypes using hardware.
          <br /> <br />
          What I enjoyed the most at studying Electronics was using
          Microprocessor and code them to do what I needed. So that I decided to
          study <i>Computer Systems Engineering</i> to know profoundly the world
          of Software.
          <br /> <br />
          Since my first day of college. I got a job as Electronics Technician
          at a company which had its Engineering Site at the University
          Facilities. And I grew on it as I was growing as student. After some
          years as technician, I was promoted to the R&D Department as an
          Embedded Systems Engineer, where I worked in projects for big
          companies doing software and some hardware prototypes.
          <br /> <br />
          And, as part of my last two years in collegue. I was accepted by Intel
          Corporation as Intern. I worked with the team of System Validation,
          doing some debug in platforms and later I worked with the System
          Design Team, where I was in charge of the Assets Life Cycle and
          incorporated some Quality Assurance Process.
          <br /> <br />
          So, after tasting the world of Hardware in a small local company and
          later in a global corporation. I wanted to work as an ENgineer in the
          world of software. So, I joined NXP Semiconductors in the Web Team.
          Here I was Web Publisher in charge of some HW Applications pages, then
          I helped with the redesign of the whole Support Area. And finally got
          promoted to the React Development Team, where during a year I was part
          of the deployment of several SPAs tools used by our customers to find
          the correct resources for their designs.
          <br /> <br />
          One year and a half later, I decided to join the User Experience
          Design team. This pushed my sense of nothing can be useful if it's not
          human-centered designed. People and technology should be together
          since the strategy of a product or service to produce a business so
          they should be together also in the Design and Development phases.
          <br /> <br />
          Now, I continue working in this team. I have got several
          certifications on UX Design, even by the Nielsen Norman Group. So,
          today besides working for NXP, I'm working in being a good mentor for
          future generations, supporting global initiatives as Technovation
          Girls (which help little girls to start in the tech world) and also I
          want to be a professional speaker being mentored by the Toastmasters
          family in Mexico.
          <br /> <br />
          That's a simplified summary of me. Hope you enjoy the study cases,
          blog posts and podcast show notes available in this site. Looking
          forward to meet you and share ideas together.
          <br />
          <br /> <br />
          Have a great day,
          <br />
          J. Antonio Avalos
        </p>
      </div>
    </Page>
  )
}

export default About
