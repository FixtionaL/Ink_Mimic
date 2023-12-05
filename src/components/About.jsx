import React from 'react'
import ImageOne from './ImageOne'
import ImageTwo from './ImageTwo'
import ImageThree from './ImageThree'
import Info1 from './Info1'
const About = () => {
  return (
    <div>
        {/* <Info1/> */}
        <ImageOne/>
        <Info1/>
        <ImageTwo/>
        <Info1/>
        <ImageThree/>
        {/* <Info1/> */}
     </div>
  )
}

export default About