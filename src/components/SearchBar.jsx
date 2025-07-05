

const SearchBar = () => {
    return (
        <>
            <div className=" relative flex items-center w-full h-8 max-w-sm">
                <svg className="absolute left-7 top-3 h-5 text-[var(--light-gray)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                    type="text" 
                    placeholder="Search a city..." 
                    className="w-full h-8 p-3 pl-10 pr-4 rounded-3xl text-[var(--dark-blue)] border border-[var(--light-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--navy-blue)]" 
                />
            </div>
        </>
    )
}

export default SearchBar;