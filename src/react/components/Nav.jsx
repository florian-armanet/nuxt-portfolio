import { NavLink, Outlet } from 'react-router-dom'
import { PATH_BASE_APP_REACT, PATH_CATEGORIES, PATH_HOME, PATH_PRODUCTS } from '../utils/constants'

const Nav = () => {
    const classesHandler = ({ isActive }) =>
        isActive
            ? 'font-bold'
            : ''

    const classesLi = 'sm-down:py-2 sm:px-4 text-xl text-center'

    return (
        <div className="o-container pb-8">
            <nav className="flex-flow-center sm:flex-flow-between items-center py-4 lg:py-12 sm-down:flex-col">
                <a href="/" className="Button Button--secondary hover:!bg-primary-hover mb-8 sm:mb-4">
                    <i className="Icon-angle-left text-2xl mr-2"></i>
                    Revenir au site Portfolio
                </a>

                <p className="font-bold text-3xl sm-down:mb-8">Demo App React</p>

                <ul className="flex flex-wrap sm-down:flex-col bg-primary-base/50 rounded p-4 sm:p-2 sm-down:divide-y sm:divide-x divide-secondary-base">
                    <li className={ classesLi }>
                        <NavLink to={ PATH_HOME } className={ classesHandler }>
                            <div className="flex-flow-centerY">
                                <i className="Icon-home text-xl mr-2"></i>
                                <span className="text-xl">Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li className={ classesLi }>
                        <NavLink to={ PATH_BASE_APP_REACT + PATH_PRODUCTS } className={ classesHandler }>
                            Products
                        </NavLink>
                    </li>
                    <li className={ classesLi }>
                        <NavLink to={ PATH_BASE_APP_REACT + PATH_CATEGORIES } className={ classesHandler }>
                            Categories
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Nav
