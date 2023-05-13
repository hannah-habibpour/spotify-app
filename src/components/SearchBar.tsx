import { BsSearch } from "react-icons/bs"

function SearchBar() {
  return (
    <form>
      <BsSearch />
      <input type="text" placeholder="Search..." />
    </form>
  )
}

export default SearchBar