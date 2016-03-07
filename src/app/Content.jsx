/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import Slider from 'material-ui/lib/slider';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 25,
    width: '50%',
    margin: '0 auto',
  },
  listStyles: {
    listStyleType: 'none',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Content extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const RateCategories = this.props.reportData.Report[0].Content.Categories;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div>
            <ul style={styles.listStyles}>
              {RateCategories.map((report) => (
                <li>
                  <span>{report.low}</span>
                  <Slider step={20}
                    defaultValue={0}
                    min={-100}
                    max={100}
                  />
                  <span>{report.high}</span>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Content;
