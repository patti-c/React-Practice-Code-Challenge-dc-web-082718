import React, { Fragment } from 'react'

const Sushi = (props) => {

    if(props.sushi) {
      return(
        <div className="sushi">
          <div id={props.sushi.id}
               className="plate"
               onClick={props.eatSushi}>
            <img src={props.sushi.img_url} width="100%" alt={props.sushi.name}/>
          </div>
          <h4 className="sushi-details">
            {props.sushi.name} - ${props.sushi.price}
          </h4>
        </div>
      )
    } else {
      return(
        <div className="sushi">
          <div className="plate">
          </div>
        </div>
      )
    }
}

export default Sushi
