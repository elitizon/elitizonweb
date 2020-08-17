import React from "react"
import tw from "twin.macro"

import Footer from '../components/footers/MiniCenteredFooter'

import ElitizonLogo from "../images/elitizon.svg"
import Menu from "../images/menu.svg"

const Header = tw.div``
const LinkLogo = tw.a``
const BurgerMenu = tw.button``
const LinkMenu = tw.a`text-xl text-gray-800 font-semibold hover:text-pink-500`
const Main = tw.div`mt-20 max-w-screen-2xl text-gray-700 mx-auto `
const Hero = tw.div``

export default () => {
  return (
    <div tw="flex flex-col w-screen">
      <Header tw="flex flex-row bg-white mx-auto shadow fixed w-screen items-center justify-between">
        <LinkLogo tw="inline-block sm:w-48 w-32 ml-4 my-4">
          <ElitizonLogo />
        </LinkLogo>
        <div tw="flex flex-row items-center justify-end">
          <div tw="w-full">
            <div tw="invisible sm:visible">
              <ul tw="flex flex-row space-x-6 mr-4">
                <li>
                  <LinkMenu href="#">About</LinkMenu>
                </li>
                <li>
                  <LinkMenu href="#">Blog</LinkMenu>
                </li>
                <li>
                  <LinkMenu href="#">Contact Us</LinkMenu>
                </li>
              </ul>
            </div>
          </div>
          <BurgerMenu tw="fill-current text-pink-500 w-8 h-8 mr-4 sm:hidden">
            <Menu />
          </BurgerMenu>
        </div>
      </Header>
      <Main>
        <div tw="font-sans text-lg p-8 text-justify">
          <h1 tw="text-2xl font-bold text-gray-800">First chapter</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h1 tw="mt-8 text-2xl font-bold text-gray-800">Second chapter</h1>
          <p tw="mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p tw="mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p tw="mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </Main>
      <Footer/>
    </div>
  )
}
