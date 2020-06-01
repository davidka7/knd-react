import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import { connect } from 'react-redux';
import { getMyIcons } from '../actions/iconAction';
import "./icon.css";

const Icon = ({getMyIcons, icons}) => {
  useEffect(() => {
    getMyIcons();
}, [])
console.log(icons)
  return (

    <div>
      
      <Card style={{ width: "25rem" }} id="wrapper">
      <div className="overflow-auto">
        <Card.Body>
      

          <Card.Text>
         {/* {icons.map(icon=>  console.log(icon) )} */}
            {icons.map(icon=> <row><column> <img src={require(`../images/${icon}`)} alt={icon} height="130px" width="130px" /> </column> </row>)}
          </Card.Text>
        </Card.Body>
       </div>
      </Card>

      <Card style={{ width: "20rem" }} id="wrapper1">
      <div className="overflow-auto">
        <Card.Body>
        <Card.Title>Favorite Box</Card.Title>
          <Card.Text>


            
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
      getMyIcons: () => getMyIcons(dispatch)
   
  }
}

export default connect(store=>({icons: store.icons}), mapDispatchToProps)(Icon)

