import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = () => {
  const [flag, setFlag] = useState(false);

  const dropdownLogOut = () => {
    setFlag(!flag);
  };

  return (
    <header>
      <h1>Expense tracker</h1>

      <div className="welcome" onClick={dropdownLogOut}>
        Welcome, Ime{" "}
        <div className="reacticon">
          <IoIosArrowDropdownCircle />
        </div>
      </div>

      <div>
        {flag && <div className="logout">Logout</div>}
      </div>
    </header>
  );
};

export default Header;
