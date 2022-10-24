import FiltersCategories from './Filters/FiltersCategories'
import Sorting from './Filters/Sorting'
import { setResetAllCheckedValues } from '../store/filtersStore'
import { useDispatch } from 'react-redux'

const Filters = () => {
    const dispatch = useDispatch()

    const resetAllFilters = (event) => dispatch(setResetAllCheckedValues(true))

    return (
        <div className="flex flex-col sm-down:w-full sm:mr-8 max-w-xs w-full mb-8">
            <p className="text-secondary-base font-bold mb-4">Filters</p>
            <div className="bg-white border border-secondary-light/50 rounded">
                <ul className="border-b border-secondary-light/50">
                    <FiltersCategories/>
                    <Sorting sortByProperty={ { name: 'Price', code: 'price', propertySorted: 'price' } }/>
                    <Sorting sortByProperty={ { name: 'Rating', code: 'rating', propertySorted: 'rate' } }/>
                </ul>
                <div className="flex flex-wrap justify-between px-4 py-4">
                    <button className="underline" onClick={ resetAllFilters }>
                        Reset All
                    </button>
                    <button
                        className="bg-secondary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                        Apply filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
