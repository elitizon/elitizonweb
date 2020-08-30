import React from "react"
import tw from "twin.macro"

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from "framer-motion"
import useInView from "use-in-view"

const StyledDiv = tw.div`min-h-screen p-8 text-secondary-500 overflow-hidden`

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>
  }

  if (!Array.isArray(children)) children = [children]

  const chooseNextAnimationDirection = (x) => {
    if (x === "left") return "right"
    return "left"
  }

  let currentAnimation = "right"

  const childrenWithAnimation = children.map((child, i) => {

    currentAnimation = chooseNextAnimationDirection(currentAnimation)

    if (child.props?.noanimation) {
      return <div key={i}>
          <div>{child}</div>
      </div>
    }

    return (
      <AnimatedSlideInComponent key={i} direction={currentAnimation}>
        <div>
          {child}
        </div>
      </AnimatedSlideInComponent>
    )
  })

  return <>{childrenWithAnimation}</>
}

function AnimatedSlideInComponent({
  direction = "left",
  offset = 30,
  children,
}) {
  const [ref, inView] = useInView(30)

  const x = { target: "0%" }

  if (direction === "left") x.initial = "-150%"
  else if (direction === "none") x.initial = "0%"
  else x.initial = "150%"

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{
        x: inView && x.target,
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: "spring", damping: 100 }}
      ref={ref}
    >
      {children}
    </motion.section>
  )
}

export default (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
)
