import React, { useState } from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Link as LinkBase } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

import FacebookIcon from "../../images/facebook-icon.svg"
import TwitterIcon from "../../images/twitter-icon.svg"
import YoutubeIcon from "../../images/youtube-icon.svg"
import LinkedinIcon from "../../images/linkedin-icon.svg"
import GithubIcon from "../../images/github-icon.svg"

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`
//const Container = tw.div`relative bg-gray-200 text-gray-700 py-20 lg:py-24 sm:px-8`
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`

const ColumnHeading = tw.h3`uppercase font-bold`

const LinkList = tw.ul`mt-6 text-sm font-medium`
const LinkListItem = tw.li`mt-3`
//const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`
const Link = tw(
  LinkBase
)`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoText = tw.h3`ml-2 text-xl font-black tracking-wider text-gray-800`

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`

export default () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [honeyBot, setHoneyBot] = useState("")

  const {
    linkedinPage,
    twitterPage,
    youtubePage,
    facebookPage,
    githubPage,
  } = useSiteMetadata()

  const _handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const _handleChangeHoneyBot = (event) => {
    setHoneyBot(event.target.value)
  }

  const _handleSubmitNewsLetter = async (e) => {
    if (!e) return
    e.preventDefault()

    // Verify if a bot has set the honey-bot field
    if (honeyBot) return

    // Verify if the email is valid
    if (
      !email.match(
        /(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
      )
    )
      return false

    try {
      setSubscribing(true)
      const result = await addToMailchimp(email)
      console.dir(result)
      // I recommend setting `result` to React state
      // but you can do whatever you want
      setEmail("")
    } catch (e) {
      console.error(e)
    } finally {
      setSubscribing(false)
      setSubscribed(true)
    }
  }

  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/Blog">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/#">About Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            {false && (
              <>
                <ColumnHeading>Product</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link href="#">Log In</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Personal</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Business</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Team</Link>
                  </LinkListItem>
                </LinkList>
              </>
            )}
          </Column>
          <Column>
            {false && (
              <>
                <ColumnHeading>Press</ColumnHeading>
                <LinkList>
                  <LinkListItem>
                    <Link href="#">Logos</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Events</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Stories</Link>
                  </LinkListItem>
                  <LinkListItem>
                    <Link href="#">Office</Link>
                  </LinkListItem>
                </LinkList>
              </>
            )}
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/legal/privacy">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/legal/terms-of-service">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/legal/disclaimer">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals
                monthly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm onSubmit={_handleSubmitNewsLetter}>
                <Input
                  arial-label="honey-bot"
                  name="honey-bot"
                  type="string"
                  value={honeyBot}
                  hidden={true}
                  onChange={_handleChangeHoneyBot}
                />
                {!subscribed && (
                  <Input
                    aria-label="email"
                    aria-required="true"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Your Email Address"
                    onChange={_handleChangeEmail}
                  />
                )}
                {subscribed && (
                  <span>
                    <strong>Newsletter subscribed</strong>
                  </span>
                )}
                {!subscribed && (
                  <SubscribeButton type="submit" disabled={subscribing}>
                    Subscribe
                  </SubscribeButton>
                )}
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoText>elitizon ltd.</LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2023 elitizon ltd. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            {githubPage && (
              <SocialLink href={githubPage} aria-label="Github">
                <GithubIcon alt="Github" />
              </SocialLink>
            )}
            {facebookPage && (
              <SocialLink href={facebookPage}>
                <FacebookIcon
                  alt="facebook"
                />
              </SocialLink>
            )}
            {twitterPage && (
              <SocialLink href={twitterPage} aria-label="Twitter">
                <TwitterIcon alt="twitter" />
              </SocialLink>
            )}
            {youtubePage && (
              <SocialLink href={youtubePage} aria-label="Youtube">
                <YoutubeIcon alt="youtube" />
              </SocialLink>
            )}
            {linkedinPage && (
              <SocialLink href={linkedinPage} aria-label="LinkedIn">
                <LinkedinIcon alt="linkedin" />
              </SocialLink>
            )}
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  )
}
