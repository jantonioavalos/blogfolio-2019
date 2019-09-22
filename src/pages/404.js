import React from "react"
import Page from "../components/PageLayout"
import Helmet from "react-helmet"
import Link from "gatsby-plugin-transition-link/AniLink"

function NotFoundPage() {
  return (
    <Page>
      <Helmet>
        <title>Error 404 | jantonioavalos.com</title>
      </Helmet>
      <div className="container about my-5">
        <h1 className="font-weight-bold">
          It looks like this page is currently unavailable.
        </h1>
        <h2>[Error 404]</h2>
        <h6 className="my-3">
          Please, visit <Link to="/">my home page</Link> so you can get back to
          available content.
        </h6>
      </div>
    </Page>
  )
}

export default NotFoundPage
