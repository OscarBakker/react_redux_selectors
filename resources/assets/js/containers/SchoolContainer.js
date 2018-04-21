import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SchoolContainer extends React.Component {
  constructor(props) {
    super(props);

    this.renderAllSchools = this.renderAllSchools.bind(this);
  }

  renderAllSchools() {
   return this.props.schools.map(school => <li>{school.name}</li>);
  }

  render() {
    return (
      <div>
        <h1>Schools</h1>

        <p>All schools</p>
        <ul>
          {this.renderAllSchools()}
        </ul>

        <p>American schools</p>
        <ul>

        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schools: state.schools,
  }
}

SchoolContainer.propTypes = {};

SchoolContainer.defaultProps = {};

export default connect(mapStateToProps)(SchoolContainer);
