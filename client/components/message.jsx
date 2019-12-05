/* eslint-disable no-useless-constructor */
import React from 'react';
import Wrapper from './styles/Messages/wrapper';
import MainWrapper from './styles/mainWrapper/wrapper';
import Span from './styles/Span/span';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.bp > this.props.estimate) {
      return (
        <>
          <Wrapper>
            You are placing a good for day market order to buy 1
            share of {this.props.ticker}. Your order will be placed after
            the market opens and executed at the best available price.
          </Wrapper>
          <MainWrapper.Button>Buy</MainWrapper.Button>
          <MainWrapper.InvertedButton onClick={this.props.orderHandler}>
            Edit
          </MainWrapper.InvertedButton>
        </>
      );
    } else if (this.props.bp < this.props.estimate) {
      return (
        <>
          <Wrapper>
            (!) Not enough buying power to purchase
            <Span.Color>shares of {this.props.ticker}.</Span.Color><br></br>
            <br></br>Please deposit funds to purchase at market price
            (5% collar included).<br></br><br></br>Market orders on
            Robinhood are placed as limit orders up to 5% above the market price
            in order to protect customers from spending more than they have in
            their Robinhood account. If you want to use your full buying power
            of ${this.props.bp} you can place a limit order instead.
          </Wrapper>
          <MainWrapper.Button>
            Deposit ${(this.props.estimate - this.props.bp).toFixed(2)}
          </MainWrapper.Button>
          <MainWrapper.InvertedButton onClick={this.props.orderHandler}>
            Back
          </MainWrapper.InvertedButton>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Message;
