import React, { useEffect, useState } from 'react'

function RefToListeners() {  
  const [isToggled, setIsToggled] = useState(false)

  const onPressHandler = () => {
    setIsToggled((prev) => { return !prev })
  }

  
  const fireMePlease = () => {
    console.log(`fired, isToggled is ${isToggled}`)
  }


  useEffect(fireMePlease, [isToggled])


  return (
    <div>
      <div
        style={{ background: 'orange', width: 30, height: 30 }}
        onClick={onPressHandler}></div>
    </div>
  )
}

export default RefToListeners
