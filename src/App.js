import '@babel/polyfill'
import React from 'react'
import { StyleRoot } from 'radium'

export default ({ children }) => (
  <StyleRoot>
    {children}
  </StyleRoot>
)
