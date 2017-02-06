import React from "react";
import './home.scss';
const jumbo = require('./jumbo.jpg');
const jumbo2 = require('./jumbo2.png');
const feat = require('./feat.jpg');
import axios from 'axios';
import { Segment, Grid, Image, Icon, Card,  Progress} from 'semantic-ui-react';
import { Button, Row, Col, CardTitle } from 'react-materialize';
import {browserHistory } from 'react-router';

 export default class Home extends React.Component {// will kinda a presentation and functional
// with grid of project-each are components

  constructor(props) {
    super(props)
    this.state = {
      allProj: []
    }
    // it's already bound to with context
    // this.viewChange = this.viewChange.bind(this);

    // problem the axios is not done before getting the state
    this.only = [];
     this.only = this.viewChange.bind(this);

     console.log(this.state.allProj, 'image');
  }

  viewChange(proj) {
    browserHistory.push({
      pathname: '/viewContainer',
      state: {
        project: proj
      }
    })
  }

  componentWillMount() {
    var self = this;
    let baseUrl = 'http://localhost:3000/';
    axios.get(`api/projects`)
    .then(res => {
      console.log(res.data);
      self.setState({ allProj: res.data});
    })

   }
  render() {
    var self = this;
    console.log(this.state.allProj);

    var arr = this.state.allProj;
    //.slice(1); // slicing so we can leave the first project as the main featured

    var  grid = arr.map(function (proj, i) {

      //onclick = browserHistory.push(`/project/${this.state.id}`)

      return (

  <Grid.Column mobile={16} tablet={8} computer={4}   key={i} onClick={self.viewChange.bind(self, proj)}>

    <Card color='green' >
    <Image className='cardImg' src={proj.image} />
    <Card.Content>
    <Card.Header>
    {proj.title}
    </Card.Header>
    <Card.Meta>
    <span className='date'>
      Joined in 2017
    </span>
    </Card.Meta>
    <Card.Description>
    {proj.shortblurb}
    </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <a>
    <Icon name='user' />
    key: {i}
    </a>
    </Card.Content>
    </Card>



</Grid.Column>

      )
    })

this.only = this.state.allProj.slice(0, 1)[0];
    //{this.props.titles.map(function(title)
    //  {
      //    return <th key={title}>{title}</th>;
      //  })}
      console.log(this.props, 'props');

    return (

        <div className='home'>
          <div className="jumb">
             <img src={jumbo} alt="dafd" className="test"/>
          </div>

          <div className='grid'>
            <h1> Featured Projects</h1>

              <Grid className='mGrid'>
                <Grid.Column width={6}>

                <Image src={feat} />
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="card-block">
                  <h4 className="card-title">Projects We Love: Dance</h4>
                  <br/>
                  <p className="card-text">Liberty Express is a dance, film and cultural exchange project that connects and inspires children all over the world.</p>
                  <br/>
                <Progress percent={60} indicating color='green'  size='medium' className='pBar' />

                <span> Project We Love | Publishing | Aurora, IL </span>
                </div>

              </Grid.Column>
    </Grid>

          <Grid  divided columns={4}>

            {grid}
          </Grid>
        </div>

        </div>
    )
  }
}

//make an axios post to get everything--save it to a variable
//then map through that variable to render a grid like thing
//

// <Card className='small'
// header={<CardTitle image={cardImg}>Card Title</CardTitle>}
// actions={[<a href='#'>{proj.user_id}</a>]}>
// {proj.description}
