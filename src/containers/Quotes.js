import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions//quotes'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
{quotes.map(quote => <QuoteCard quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} key={quote.id}/> )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect((state)=>({quotes: state.quotes}), {upvoteQuote,downvoteQuote, removeQuote})(Quotes);



