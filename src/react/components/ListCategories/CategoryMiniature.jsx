import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH_BASE_APP_REACT, PATH_CATEGORIES } from '../../utils/constants'

const CategoryMiniature = ({ category }) => {
    const products   = useSelector(state => state.products.all)
    const categories = useSelector(state => state.categories.all)

    const [firstProductOfCategory, setFirstProductOfCategory] = useState(null)

    useEffect(() => {
        if (products.length && categories.length && !firstProductOfCategory) {
            setFirstProductOfCategory(products.find(product => product.category.categoryCode === category.categoryCode))
        }
    }, [products, categories, firstProductOfCategory])

    if (firstProductOfCategory) {
        return (
            <li className="o-col-12 sm:o-col-6 lg:o-col-3 transition mb-4 sm:mb-8">
                <NavLink to={ `${ PATH_BASE_APP_REACT + PATH_CATEGORIES + '/' + category.categoryLabelOrigin }` }>
                    <div className="h-72 group overflow-hidden">
                        <p className="z-2 absolute absolute-center bg-secondary-base text-white py-1 px-2">{ category.categoryLabel }</p>
                        <img src={ firstProductOfCategory.image }
                             alt={ category.categoryLabel }
                             className="z-1 relative w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition"/>
                    </div>
                </NavLink>
            </li>
        )
    }
}

export default CategoryMiniature
