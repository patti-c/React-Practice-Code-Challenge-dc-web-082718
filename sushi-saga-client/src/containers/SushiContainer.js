import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((sushiObject, index) => <Sushi key={index} eatSushi={props.eatSushi} sushi={sushiObject}/>)
        }
        <MoreButton fillBar={props.fillBar}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
