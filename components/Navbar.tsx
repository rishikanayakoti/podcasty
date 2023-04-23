import {MenuIcon, SearchIcon, MoonIcon, UserCircleIcon} from "@heroicons/react/solid";
function Navbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md: px-10">
      {/* left */}
      <div className="flex">
      <MenuIcon className =" h-6 px-3 cursor-pointer"/>    
      <h1 className="cursor-pointer">APNACAST</h1>
      </div>

      {/* middle */}
      <div className="flex border-2 items-center rounded-full py-1">
       <input className=" flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="search"/>
       <SearchIcon className="h-6 px-2 text-black rounded-full cursor-pointer"/>
      </div>

      {/* right */}
      <div className="flex justify-end items-center space-x-4">
      <MoonIcon className="h-6 cursor-pointer"/>
      <UserCircleIcon className=" h-6 cursor-pointer"/>
      </div>
    </header>
    )
}

export default Navbar
