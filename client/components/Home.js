import React from "react";
import './home.scss';
const jumbo = require('./jumbo.jpg');
const cardImg = require('./jumbo2.png');
import axios from 'axios';
import { Grid, Image, Card, Icon} from 'semantic-ui-react'

 export default class Home extends React.Component {// will kinda a presentation and functional
// with grid of project-each are components

  constructor(props) {
    super(props)
    this.state = {
      allProj: []
    }

  }
  componentWillMount() {
    var self = this;
    let baseUrl = 'http://localhost:3000/';
    axios.get(`${baseUrl}api/projects`)
    .then(res => {
      console.log(res.data);
      self.setState({ allProj: res.data});
    })

   }
  render() {
    var  grid = this.state.allProj.map(function (proj) {
      console.log(proj.title);
      return ( <Card>
    <Image src={cardImg} />
    <Card.Content>
      <Card.Header>
        proj.title
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2017
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>)
    })

    //{this.props.titles.map(function(title)
    //  {
      //    return <th key={title}>{title}</th>;
      //  })}

    return (
    <div className='home'>
      <div className="jumbotron">
         <img src={jumbo} alt=""/>
      </div>

      <div>
          {grid}
       </div>
    </div>
    )
  }
}

//make an axios post to get everything--save it to a variable
//then map through that variable to render a grid like thing
//
