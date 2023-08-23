import React from "react";
import DropDown from "./DropDown";

function MainList(props) {
  const { friends } = props;
  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          {friend.first_name}
          <DropDown list={friend} />
        </div>
      ))}
    </div>
  );
}

export default MainList;
