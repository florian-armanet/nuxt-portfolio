import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setResetAllCheckedValues } from '../../store/filtersStore'

const SortingItem = ({ typeSorting, label, resetCheckedValues, setResetCheckedValues, sortByProperty }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const inputNode             = React.createRef()
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)

    const handleChange = (event) => {
        setResetCheckedValues(false)
        dispatch(setResetAllCheckedValues(false))

        if (typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => b[sortByProperty.propertySorted] - a[sortByProperty.propertySorted])
            ))
        }

        if (typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a[sortByProperty.propertySorted] - b[sortByProperty.propertySorted])
            ))
        }
    }

    useEffect(() => {
        if (resetCheckedValues || resetAllCheckedValues) {
            inputNode.current.checked = false
            dispatch(setResetAllCheckedValues(false))
        }
    }, [resetCheckedValues, resetAllCheckedValues])

    return (
        <li className="flex-flow-centerY mb-1">
            <input type="radio"
                   name="sorting"
                   id={ sortByProperty.code + '_' + typeSorting }
                   className="cursor-pointer appearance-none w-4 h-4 rounded-full border-2 border-secondary-base transition checked:bg-secondary-base"
                   ref={ inputNode }
                   onChange={ handleChange }/>
            <label htmlFor={ sortByProperty.code + '_' + typeSorting }
                   className="cursor-pointer font-bold ml-2">{ label }</label>
        </li>
    )
}

export default SortingItem
