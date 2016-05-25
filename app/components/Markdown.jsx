
import React from 'react';
import marked from 'marked';

export default class Markdown extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    };
  }

  handleChange() {
    this.setState({
      value: this.refs.textarea.value,
    });
  }

  rawMarkup() {
    return {
      __html: marked(this.state.value, {
        sanitize: true,
      }),
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea
            rows="26"
            type="text"
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value}
            className="form-control markdown"
          />
        </div>
        <div className="col-md-6">
          <div
            className="content"
            dangerouslySetInnerHTML={this.rawMarkup()}
          />
        </div>
      </div>
    );
  }
}
