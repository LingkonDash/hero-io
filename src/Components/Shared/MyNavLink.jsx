import { NavLink } from "react-router";

const MyNavLink = ({to, children}) => <NavLink to={to} className={({isActive}) => `${isActive && 'underline text-purple-600'} font-semibold`}>{children}</NavLink>

export default MyNavLink