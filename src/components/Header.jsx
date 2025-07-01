import DropdownButton from "./DropdownButton";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center p-1 border w-2xl">
                <DropdownButton />
                <SearchBar />
            </div>
        </>
    )
}

export default Header;