import React, { Component } from 'react';

// To get a SinglePage or Post we'll pass in the object's slug for navigation purposes
// /posts?fslug=${this.props.slug} or /pages?slug=${this.props.slug}
class SinglePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      postData: {},
      id: '',
      title: '',
      content: '',
      date: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
    const url = `https://defc0re.wpengine.com/wp-json/wp/v2/pages?slug=${this.props.match.params.slug}`;
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
        console.log(data.map(item => item));

        const id = data[0].id;
        console.log(this.props.match.params.slug);
        const title = data[0].title.rendered;
        const date = data.date;
        console.log(date);
        const content = data[0].content.rendered;
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

        <h5>{this.state.date}</h5>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default SinglePage
;
