import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { FaBars } from "react-icons/fa";

const items = [
    {
        label: <Link to="/#about">About</Link>,
        key: '0',
    },
    {
        label: <Link to="/#portfolio">Portfolio</Link>,
        key: '1',
    },
    {
        label: <Link to='/#Technologies'>Technologies</Link>,
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: <Link to='/#resume'>Resume</Link>,
        key: '3',
    },
    {
        label: <Link to='/#contact'>Contact</Link>,
        key: '4'

    }
];

const DropdownMenu = () => (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <FaBars className="menu-btn" />
    </Dropdown>
  );

  export default DropdownMenu;