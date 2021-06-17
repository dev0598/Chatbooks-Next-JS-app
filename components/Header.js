import Image from "next/image";
import { 
    BellIcon, 
    ChatIcon, 
    ChevronDownIcon, 
    HomeIcon, 
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    LogoutIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex mt-2 ml-2 items-center">
                <Image className='rounded-full mx-auto'
                    src="/images/chatbooks-logo-round.png" 
                    alt=""
                    width= {45}
                    height= {45}
                    layout="fixed" 
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input 
                        className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' 
                        type="text" 
                        placeholder="Seach ChatBooks" 
                        
                        />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Pic */}
                <LogoutIcon
                    onClick={signOut}
                    className="p-2 h-10 w-10 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-gray-300"
                    // src="/images/logout_black_24dp.svg"
                    // width="45"
                    // height="45"
                    // layout="fixed"
                />
                <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header;
