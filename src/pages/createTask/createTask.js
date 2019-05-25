import React from 'react';

import 'pages/createTask/createTask.scss';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-task">
        <form>
          <div className="form-group">
            <label>Project Title</label>
            <input type="text" name="title" className="form-control" placeholder="project title" />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
