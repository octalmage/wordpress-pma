import React, { Component } from 'react';


// To get a SinglePage or Post we'll pass in the page ID as props. <SinglePage id="26" /> 
class SinglePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      title: '',
      content: '',
      date: '',
    };
  }

  componentDidMount() {
    console.log("Mounted")
    const url = `https://defc0re.wpengine.com/wp-json/wp/v2/pages/${this.props.id}`;
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
        const id = data.id;
        const title = data.title.rendered;
        const date = data.date;
        const content = data.content.rendered;
        //const styles = data.styles.map(styles => styles);
        //const tracklist = data.tracklist.map(track => track.title);
        //const artists = data.artists.map(artist => artist.name);
        //const labels = data.labels.map(labels => labels.name);
        //const title = data.title;
        this.setState({
          id: id,
          title: title,
          date: date,
          content: content,
          //title: title,
          //tracklist: tracklist,
          //styles: styles,
          //artists: artists,
          //labels: labels,
        })
    });
  }

  render(){
    return(
      <div>
        <h3>{this.state.title}</h3>
        <h5>{this.state.date}</h5>
        <span>{this.state.content}</span>
      </div>
    );
  }
}

export default SinglePage
;
