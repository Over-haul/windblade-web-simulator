import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="sidebar">
    <NavLink className='navlink' to='/' end>
      Setup
    </NavLink>
    <NavLink className='navlink' to='/overhaul'>
      Overhaul Page test
    </NavLink>
  </aside>
);
export default Sidebar;