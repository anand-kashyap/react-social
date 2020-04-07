
import React, { cloneElement } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export default ({ path, duration = 1000, pageKey, children }) => {
  const childFactoryCreator = (props) => child => {
    const cprops = { classNames: 'slide', ...props };
    if (`.$${pageKey}` === child.key && path.startsWith('/comments/')) { // current
      cprops.classNames = 'slide-up';
    }
    return cloneElement(child, cprops)
  }
  return <TransitionGroup className="container main-content"
    childFactory={childFactoryCreator({ timeout: duration })}
  >
    <CSSTransition in={true} unmountOnExit appear key={pageKey} timeout={duration}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
}