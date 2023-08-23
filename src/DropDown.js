import React from "react";

class DropDown extends React.Component {
  //im creating state to keep track of its own dropdown status
  constructor(props) {
    super(props);
    this.state = {
      isDropDown: false
    };
  }
  //handler

  toggleDropdown = () => {
    this.setState((opposite) => ({
      isDropDown: !opposite.isDropDown
    }));
  };

  render() {
    const { list } = this.props;
    const { isDropDown } = this.state;
    return (
      <div>
        <button onClick={this.toggleDropdown}> Show Friends </button>
        {isDropDown && (
          <div>
            {list.friends.map((listFriends) => (
              <li key={listFriends.id}>{listFriends.firstName}</li>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default DropDown;
//im going to export this and plug it into Mainlist.js so that it renders in there
