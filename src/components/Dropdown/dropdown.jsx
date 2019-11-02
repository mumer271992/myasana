import React from 'react';
import PropTypes from 'prop-types';

import 'components/Dropdown/dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      listOpen: false,
    };

    this.toogleDropdownMenu = this.toogleDropdownMenu.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  componentDidMount() {
    const { list, selected, uniqueKey } = this.props;
    if (!selected) {
      return;
    }
    const index = list.findIndex(item => item[uniqueKey] === parseInt(selected));
    if (index > -1) {
      this.setState(() => ({
        title: list[index].name,
      }));
    }
  }

  onSelectItem(e) {
    e.preventDefault();
    const dataId = e.target.dataset.id;
    this.setState({
      title: e.target.innerText,
      listOpen: false,
    });
    const { onSelect } = this.props;
    onSelect(dataId);
  }

  toogleDropdownMenu() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list } = this.props;
    const { title, listOpen } = this.state;

    return (
      <div className="dropdown">
        <div
          className="dropdown-toogle"
          onClick={this.toogleDropdownMenu}
        >
          { title }
          <i className="arrow down" />
        </div>
        {
          listOpen
          && (
            <ul className="dropdown-menu">
              {
                list.map(item => (
                  <li
                    className="dropdown-item"
                    key={item.id}
                    data-id={item.id}
                    onClick={this.onSelectItem}
                  >
                    { item.name }
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf,
  selected: PropTypes.string,
};

Dropdown.defaultProps = {
  title: 'Custom Dropdown',
  list: [],
  selected: '',
};

export default Dropdown;
