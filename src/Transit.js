
import React, { cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const childFactoryCreator = (props) => child => {
  return cloneElement(child, props)
}

export default ({ path, duration = 1000, pageKey, children }) => {
  const transition = path.startsWith('/comments/') ? 'slide-up' : 'slide';
  return <TransitionGroup className="container main-content"
    childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
  >
    <CSSTransition in={true} unmountOnExit appear key={pageKey} classNames={transition} timeout={duration}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
}