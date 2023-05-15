import { useState, useId } from 'react'
import {useFilters} from '../hooks/useFilters.js'
import './Filters.css'
function Filters() {
    const {filters, setFilters} = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const handleChangeMinPrince = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => {
            return (
                { 
                    ...prevState,
                     category: event.target.value
                }
            )
        }
        )
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio desde:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrince}
                    value={filters.minPrice}
                >
                </input>
                <span>${filters.minPrice}</span>

            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters