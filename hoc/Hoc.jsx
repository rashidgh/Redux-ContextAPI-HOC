import React from 'react'

const Hoc = (Wrap) => {
  return function Send() {
    return (
      <Wrap value="hello"/>
    )
  }
}

export default Hoc