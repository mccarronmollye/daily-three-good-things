import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux'
import { fetchGraditude, editGraditude } from '../../actions'
import GraditudeForm from './GraditudeForm'

class GraditudeEdit extends React.Component {
  componentDidMount(){
    this.props.fetchGraditude(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editGraditude(this.props.match.params.id, formValues)
  }

  render(){
    if (!this.props.graditude){
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit a Graditude</h3>
        <GraditudeForm
          initialValues={_.pick(this.props.graditude, 'title', 'description')}
          onSubmit={this.onSubmit}
          />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { graditude: state.graditudes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchGraditude, editGraditude })(GraditudeEdit)
