import React from 'react';
import { Container, Header, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import fetchJsonp from 'fetch-jsonp';
import Cards from './Cards.jsx';
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    fetchJsonp('http://api.flickr.com/services/feeds/photos_public.gne?format=json',{
        jsonpCallbackFunction: 'jsonFlickrFeed'
      })
      .then((response)=> {
        return response.json()
      }).then((json)=> {
        if(json.items){
          this.setState({loading: false, items: json.items});
        }else{
          this.setState({loading: false, items: null, error: true});
        }
      }).catch((ex)=> {
        this.setState({loading: false, items: null, error: true});
      })
  }

  render() {
    const loading = this.state.loading?true:false;
    const error = this.state.error;
    const items = this.state.items;
    return (
      <Container fluid>
        <Header style={{"marginTop":"2rem"}}>Flickr Feed</Header>
        <Segment basic style={{"padding":"0px"}}>
          <Dimmer active={loading}>
            <Loader />
          </Dimmer>
          <Cards items={items} />
        </Segment>
      </Container>
    );
  }
}
