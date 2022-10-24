import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../store/searcherStore'
import debounce from '../utils/debounce'
import { setProductsBySearcher } from '../store/productsStore'
import { useEffect } from 'react'

const Searcher = () => {
    const dispatch    = useDispatch()
    const getSearcher = useSelector(state => state.searcher.searchValue)

    const handleChange = debounce((event) => {
        dispatch(setSearcher(event.target.value))
    }, 1000)

    useEffect(() => {
        dispatch(setProductsBySearcher(getSearcher))
        console.log(getSearcher);
    }, [getSearcher, dispatch])

    return (
        <div className="flex-flow-between items-center bg-white ring-4 ring-inset ring-secondary-base/75 py-2 px-8 max-w-xs w-full">
            <input type="text"
                   placeholder="Rechercher un produit..."
                   className="text-secondary-base font-bold placeholder:text-secondary-base outline-none max-w-[200px]"
                   onChange={ handleChange }/>
            <i className="Icon-search text-lg"></i>
        </div>
    )
}

export default Searcher
