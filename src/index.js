import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Quotes extends React.Component {
  render() {
    return (
    <div className="text-author-box" style={{color: this.props.color}}>
      <div id="text"><i className="fa fa-quote-left"></i> {this.props.quote}</div>
      <div id="author" className="text-right">- {this.props.author}</div>  
    </div>
    );
  }
}
class QuotesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false,
      colors: ["#008080", "#2F4F4F", "#8A2BE2", "#6495ED", "#FF7F50", "#FF1493"],
      quotes: [{
       "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
{
       "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
       "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
       "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
       "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
{
       "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"}]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({isClick: !this.state.isClick});
  }
  render() {
    const quote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    const color = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
    const href = "https://twitter.com/intent/tweet?text=" + '"' + quote.quote + '" ' + quote.author;
    return (
      <div className="full-box" style={{backgroundColor: color}}>
        <div id="quote-box">
          <Quotes quote={quote.quote} author={quote.author} color={color}/>
          <div className="button">
            <a id="new-quote" className="btn btn-default" onClick={this.handleClick} style={{backgroundColor: color, color: 'white'}}>New quote</a>
            <a id="tweet-quote" href={href} className="btn btn-default" style={{backgroundColor: color, color: 'white'}}><i className="fa fa-twitter"></i></a>
          </div>
        </div>        
      </div>
    );
  }
}

ReactDOM.render(<QuotesBox />, document.getElementById('root'));