import { BsSearch } from "react-icons/bs"

function SearchBar() {
  return (
    <form className="w-2/3" >
      <div className="flex items-center gap-2" >
      <BsSearch />
      <input type="text" placeholder="Search..." className="border-2 w-full pl-2 rounded-full" />
      </div>
    </form>
  )
}

export default SearchBar