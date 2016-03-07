import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UXReport from './UXReport'; // Our custom react component

const Reports = {
  'Report': [
    {
      'Name': 'CompanyA',
      'Id': '1',
      'Type': 'UX',
      'Content': {
        'Categories': [
          {
            Id: 1,
            Name: 'Reliability',
            low: 'Unreliable',
            high: 'Trustworthy reliable',
          },
          {
            Id: 2,
            Name: 'Usage',
            low: 'Complicated',
            high: 'Easy',
          },
          {
            Id: 3,
            Name: 'Robustness',
            low: 'Error Prone',
            high: 'Full Proof',
          },
          {
            Id: 4,
            Name: 'Implementation',
            low: 'Missing few components',
            high: 'Complete',
          },
          {
            Id: 5,
            Name: 'Automation',
            low: 'Manual-indisicive',
            high: 'Automated, Helpful in assisting',
          },
        ],
      },
    },
  ],
};

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<UXReport Reports={Reports} />, document.getElementById('app'));
