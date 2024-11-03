export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSelectChange = (event) => {
        setFilter(event.target.value)
    }

    const sortCountries = (value) => {

        const sortCountry = [...countries].sort((a, b) => {
            return value === 'asc'
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry)
    }

    return <section className="section-searchFilter container">
        <input type="text" name="" placeholder="search..." value={search} onChange={handleInputChange} />

        <div>
            <button onClick={() => sortCountries("asc")}>Asc</button>
        </div>
        <div>
            <button onClick={() => sortCountries("des")}>Dsc</button>
        </div>
        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
}