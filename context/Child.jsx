import React, { useContext } from 'react'
import { GlobalApi } from './Context'

const Child = () => {
  let {ename,password} = useContext(GlobalApi);
  console.log(ename,password)
  return (
    <div><p>{ ename}</p></div>
  )
}

export default Child;