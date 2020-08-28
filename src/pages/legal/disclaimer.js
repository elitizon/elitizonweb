import React from "react"
import { Page } from "../../components/Page"
import { Container } from "../../components/HtmlContainer"

export default () => {
  return (
    <Page>
      <Container noanimation>
        <h1>Disclaimer</h1>
        <h2>Website published by:</h2>
        <p>
          <strong>Legal name of the Company:</strong>
        </p>
        <p>Elitizon Ltd</p>
        <p>
          <strong>Company Type:</strong>
          <p>Private Company Limited By Shares</p>
        </p>
        <p>
          <strong>Company Registration No.:</strong>
          <p>2348219</p>
        </p>
        <p>
          <strong>Address of the corporate headquarters:</strong>
        </p>
        <p>
          28 Mody Road, Room 2203, 22/F., CFC Tower, Tsim Sha Tsui, Kowloon Hong
          Kong SAR China
        </p>
        <p>
          <strong>Editor-in-chief:</strong>
        </p>
        <p>
          Raphaël MANSUY, CTO
          <br /> Phone: +852 5541 9728
          <br /> Email: raphael.mansuy_(At)_elitizon.com
        </p>
        <p>
          <strong>Website hosted by:</strong>
        </p>
        <p>Netlify - Mulicloud AWS / AZURE / Google Cloud</p>
      </Container>
    </Page>
  )
}
