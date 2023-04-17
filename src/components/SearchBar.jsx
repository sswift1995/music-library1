
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext);

    let onSearchSubmit = e => {
        e.preventDefault()
        handleSearch(term.current.value)
        term.current.value =' '
    }

    return (
        <form onSubmit={onSearchSubmit} >
            <input type="text"
            ref={term}
                placeholder=" Enter a search term here"
            />
            <input type="submit" />
        </form>
    )
}