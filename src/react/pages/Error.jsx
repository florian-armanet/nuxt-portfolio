import { NavLink } from 'react-router-dom'
import { PATH_BASE_APP_REACT } from '../utils/constants'

function Error () {
    return (
        <>
            <p className="text-center py-20 font-bold text-4xl">Oupsss ! Page doesn't exist</p>
            <div className="flex-flow-center">
                <NavLink to={ PATH_BASE_APP_REACT } className="text-center font-bold text-xl has-underline">
                    Back to homepage
                </NavLink>
            </div>
        </>
    )
}

export default Error
