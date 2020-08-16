import React from "react"
import tw from 'twin.macro'

import { Aperture } from '../components/Aperture'

import Test  from '../images/test.svg'
import Logo from '../images/elitizon.svg'

const Square = tw.div`bg-pink-500 w-10 h-10`

export default () => (
  <div>
    <Square />
    <Square tw="m-5 bg-green-500"></Square>
    <div tw="bg-yellow-200 h-20 flex flex-col items-center justify-center">
      <Aperture tw="fill-current text-pink-500 h-24"  />
    </div>
    <Test tw="text-pink-500 fill-current w-10 h-10"/>
    <Logo tw="text-pink-500 fill-current w-1/2"/>
  </div>
)
