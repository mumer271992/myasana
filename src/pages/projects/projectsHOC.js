import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Projects from './Projects';

import { getList } from '../../actions/project';

const mapStateToProps = state => ({
  projects: state.projects.projects,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getList()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));
