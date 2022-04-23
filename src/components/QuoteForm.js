import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addQuote } from '../actions/quotes';
import reducers from '../reducers';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState( { [event.target.name] : event.target.value  });
  }

  handleOnSubmit = event => {
  //  event.preventDefault() and send the state along with the dispath to the reducers. I don't know how to do that yet
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onChange={event => this.handleOnChange(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control" name="content"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input className="form-control" name="author" type="text"
                        value={this.state.author} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// pass the state and dispatch as props to the class. I don't remenber how to do that yer
//add arguments to connect as needed
export default connect()(QuoteForm);
