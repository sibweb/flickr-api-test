import React from 'react';
import { Card, Image } from 'semantic-ui-react';
export default class Cards extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true
    };
  }
  render() {
    const items = this.props.items;
    const cards = [];
    if(items){
      for(let [index, item] of items.entries()){

        let author = "No author";
        let title = "No title";
        let description = "No description";
        let tags = "No Tags";

        if(item.title.length > 1){
          title = <a target="_blank" href={item.link}>{item.title}</a>;
        }

        if(item.author.length > 1){
          var getName = item.author.match(/\("(.*)"\)/);
          author = <a style={{"textDecoration":"underline"}} target="_blank" href={"http://www.flickr.com/photos/" + item.author_id}>{getName[1]}</a>;
        }
        if(item.description.length > 1){
          description = <span dangerouslySetInnerHTML={{__html:item.description}}></span>
        }
        if(item.tags.length > 1){
          tags = item.tags;
        }
        let image = item.media.m ? item.media.m : "https://react.semantic-ui.com/assets/images/wireframe/white-image.png";
        cards.push(
          <Card color='teal' raised key={"card" + index}>
            <Image height="200" src={image} />
            <Card.Content>
              <Card.Header style={{"wordBreak": "break-all"}}>{title}</Card.Header>
              <Card.Meta style={{"wordBreak": "break-all"}}>By {author}</Card.Meta>
              {/* <Card.Description style={{"wordBreak": "break-all"}}>{description}</Card.Description> */}
            </Card.Content>
            <Card.Content extra style={{"wordBreak": "break-all"}}>
              <strong>Tags: </strong> {tags}
            </Card.Content>
          </Card>
        )
      }
    }
    return (
        <Card.Group key="cardGroup">
          {cards}
        </Card.Group>

    );
  }
}
