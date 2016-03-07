import React from 'react';
import Content from './Content';

const styles = {
  header: {
    textAlign: 'left',
    fontWeight: 'normal',
  },
};

class UXReport extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div id="report">
        <h1 style={styles.header}>Rate User Experience :</h1>
        <Content reportData={this.props.Reports} />
      </div>
    );
  }
}

export default UXReport;
