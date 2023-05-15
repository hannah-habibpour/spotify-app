import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void
}

function SearchBar({ onSearch }: Props) {

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form className="w-2/3" onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value)
    }}>
      <div className="flex items-center gap-2" >
      <BsSearch />
      <input ref={ref} type="text" placeholder="Search..." className="border-2 w-full pl-2 rounded-full" />
      </div>
    </form>
  )
}

export default SearchBar