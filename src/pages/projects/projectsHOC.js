import Projects from './projects';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getList } from '../../actions/project';

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(getList()) 
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));