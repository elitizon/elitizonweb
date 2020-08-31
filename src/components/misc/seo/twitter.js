import React from "react"
import { Helmet } from "react-helmet"

export const Twitter = ({
  type = "summary_large_image",
  username,
  title,
  desc,
  image,
  site,
}) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    {image && image.indexOf("https" > -1) && (
      <meta name="twitter:image:secure_url" content={image} />
    )}
    <meta name="twitter:image:alt" content={desc} />
    <meta name="twitter:site" content={site} />
    {username && <meta name="twitter:creator" content={username} />}
  </Helmet>
)
