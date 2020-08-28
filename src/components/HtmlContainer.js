import React from 'react'
import styled  from "styled-components"
import tw from "twin.macro"

export const Container = styled.div`

${tw`max-w-screen-xl mx-auto py-20 lg:py-24`}

h1 {
  ${tw`text-2xl my-4 font-bold`}
}
h2 {
  ${tw`text-xl my-3 font-semibold`}
}
h3 {
  ${tw`text-xl my-3 font-medium`}
}
p {
  ${tw`my-2 text-justify text-gray-600`}
}

li {
  ${tw`mx-2 my-2 text-gray-600`}
}

a {
  ${tw`hover:text-primary-500 text-gray-800`}
}
`
