import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSchoolsByCountry } from '../reducers/schoolSelectors';

class SchoolContainer extends React.Component {
  constructor(props) {
    super(props);

    this.renderSchools = this.renderSchools.bind(this);
  }

  renderSchools(schools) {
   return schools.map(school => <li key={school.name}>{school.name}</li>);
  }

  render() {
    return (
      <div>
        <h1>Schools</h1>

        <p>All schools</p>
        <ul>
          {this.renderSchools(this.props.schools)}
        </ul>

        <p>American schools</p>
        <ul>
          {this.renderSchools(this.props.americanSchools)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schools: state.schools,
    americanSchools: selectSchoolsByCountry('USA', state.schools),
  }
}

SchoolContainer.propTypes = {};

SchoolContainer.defaultProps = {};

export default connect(mapStateToProps)(SchoolContainer);
