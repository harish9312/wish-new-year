import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import './App.css';

const img1 = require('./images/img1.gif');
const img2 = require('./images/img2.gif');
const img3 = require('./images/img3.gif');
const img4 = require('./images/img4.gif');
const img5 = require('./images/img5.gif');
const img6 = require('./images/img6.gif');
const img7 = require('./images/img7.gif');
const img8 = require('./images/img8.gif');
const img9 = require('./images/img9.gif');

export interface IApp {
  wisherName: string;
}

export default class AppImpl extends React.Component<IApp> {

  renderImage = () => {
    const arrayOfImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
    const index = Math.random().toString().split('.')[1].substring(0, 1)
    return arrayOfImages[index]
  }

  renderQuote = () => {
    const quotes = [
      'Out with the old, in with the new: may you be happy the whole year through.Happy New Year!',
      'I wish for this year to have lesser disasters, less hate, less accidents and loads of love.Happy New Year',
      'As I think about our friendship and how happy it has made me, I want to wish you happiness in the year to come.',
      'May the year ahead brings you good luck, fortune, success and lots of love.' +
      ' Happy New Year to you and your loved ones.',
      'Counting my blessings and wishing you more.Have a prosperous New Year!',
      'This coming year may you have happiness, good health, prosperity and finally realize how awesome I really am!',
      'We may be far apart but you are always in my heart.' +
      'May you have a healthy and abundant New Year!',
      'May the New Year hurry up and come so we can finally get past this holiday season and get on with our lives!',
      'My gift of unconditional love I give to you, with sincerity, blessings and loyalty too.' +
      'Have a wonderful New Year my darling!',
      'May the spirit of the season of New year fill your heart with serenity and peace. Wish you a happy new year'
    ]
    const index = Math.random().toString().split('.')[1].substring(0, 1)
    return quotes[index]
  }

  render() {
    return (
      <div>
        <h1 className={this.props.wisherName ? `quote-animate` : `quote`}>{this.renderQuote()}</h1>
        <p className="from">From</p>
        <h1 className="wisher-name">{this.props.wisherName}</h1>
        <img src={this.renderImage()} style={{ height: '100vh' }} className="img-responsive" alt="logo" />
      </div>
    );
  }
}
export function mapStateToProps(state: { wisherName: string }, ownProps: any) {
  return {
    wisherName: ownProps.match.params.id
  };
}

export const App = connect<{}, {}>(mapStateToProps)(AppImpl as any) 