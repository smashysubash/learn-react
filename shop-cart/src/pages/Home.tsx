import React, { useState } from 'react'

export const Home = () => {
  const [st, setSt] = useState(0)
  const i=0;
  console.log(i)

  
  return (
    <>
    <div>Home {i}</div>
    <button onClick={()=>setSt(st+1)}>item clicked {st} times</button>
    </>
  )
}
