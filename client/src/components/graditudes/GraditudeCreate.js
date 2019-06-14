import React from 'react';
import { connect } from 'react-redux'
import { createGraditude } from '../../actions'
import GraditudeForm from './GraditudeForm';

class GraditudeCreate extends React.Component{

  onSubmit = formValues => {
    this.props.createGraditude(formValues)
  }

  render() {
    return(
      <div>
        <h3>Create a Graditude</h3>
        <GraditudeForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createGraditude })(GraditudeCreate)
