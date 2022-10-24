import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_PRODUCTS, PATH_BASE_APP_REACT } from '../utils/constants'

const Home = () => {
    const infos = [
        'est développé en React',
        'n\'a pas pour but d\'être beau !',
        'est une mise en avant de mon savoir-faire en React : gestion du store global avec Redux, state local avec useState(), observer une modification d\'un state avec useEffect(), etc...',
        'se base sur Fake Store API afin de récupérer des données fake pour ce site de démo',
    ]
    return (
        <>
            <CSSTransition in={ true } classNames="example" timeout={ 300 } unmountOnExit appear>
                <div
                    className="flex-flow-center flex-col max-w-sm mx-auto bg-primary-base/50 p-4 rounded mb-6 sm:mb-12">
                    <p className="font-bold text-xl">Ce site</p>
                    <ul className="flex flex-col">
                        { infos.map((info, index) => <li key={ index } className="mt-1">- { info }</li>) }
                    </ul>
                </div>
            </CSSTransition>

            <div className="flex-flow-center">
                <NavLink to={ PATH_BASE_APP_REACT + PATH_PRODUCTS }
                         className="Button Button--primary font-bold !text-secondary-base m-2">
                    Voir la page Produits
                </NavLink>
                <NavLink to={ PATH_BASE_APP_REACT + PATH_CATEGORIES }
                         className="Button Button--primary font-bold !text-secondary-base m-2">
                    Voir la page Catégories
                </NavLink>
            </div>
        </>
    )
}

export default Home
