import { cn } from "@/lib/utils";

interface NavbarProps {
  navHeight?: number;
}
const Navbar: React.FC<NavbarProps> = ({ navHeight = 4 }) => {
  const [open, setOpen] = useState(false);

  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const authUser = useSelector((state: RootState) => state.auth.user);

  return (
    <div
      className={`bg-card border-gray-200 rounded-lg dark:bg-card py-${navHeight}`}
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row  lg:px-8">
        <div className="px-4 flex flex-row items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-8" alt="Kouralink Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-card-foreground hidden sm:block">
              Kouralink
            </span>
          </Link>
          <div className="flex gap-2">
            <div className="flex gap-2 lg:hidden">
              <ModeToggle />

              {
                authUser && (
              <div className="flex gap-2 ">
                <NotificationASideSheet />
                <AccountNavDropdownMenu />
              </div>
              )}
            </div>
            <button
              className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {!open ? (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`flex-col flex-grow gap-2 lg:pb-0 lg:flex lg:justify-end lg:flex-row ${
            open ? "flex" : "hidden"
          }`}
        >
          {/* <NavLink
            className="px-4 py-2  text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/"
          >
            Home
          </NavLink> */}
          {/* <NavLink
            className="px-4 py-2  text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/team/search"
          >
            Teams
          </NavLink> */}
          <NavLink
            className="px-4 py-2  text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/team/search"
          >
            Teams
          </NavLink>
          <NavLink
            className="px-4 py-2  text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/users/search"
          >
            Users
          </NavLink>

          <NavLink
            className="px-4 py-2  text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/tournament"
          >
            Tournaments
          </NavLink>
          <NavLink
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 lg:mt-0  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to="/contact"
          >
            Contact
          </NavLink>

          <div className="gap-2 hidden lg:flex">
              <ModeToggle />
              {
                authUser && (
                  <div className="flex gap-2 ">
                <NotificationASideSheet />
                <AccountNavDropdownMenu />
              </div>
              )}
            </div>
          <div className={cn("flex gap-2 flex-col", "lg:flex-row")}>
            {
              !authUser && (
                <div>
                  <SingInUpButtons />
                </div>
              )
              // : (
              //   <div className="flex gap-2">
              //     <AccountNavDropdownMenu />
              //   </div>
              // )
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;