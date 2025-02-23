import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Search, Send } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Header() {
    const { user } = useKindeBrowserClient();
    
    return (
        <div className='flex justify-end w-full gap-2 items-center p-2 bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700'>
            
            {/* Search Bar */}
            <div className='flex gap-2 items-center border rounded-md p-1 
                            bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'>
                <Search className='h-4 w-4 text-gray-600 dark:text-gray-300' />
                <input 
                    type='text' 
                    placeholder='Search' 
                    className='bg-transparent text-black dark:text-white 
                               placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none'
                />
            </div>
            
            {/* User Profile Image */}
            {user?.picture && (
                <div>
                    <Image
                        src={user.picture}
                        alt='User profile'
                        width={30}
                        height={30}
                        className='rounded-full border border-gray-300 dark:border-gray-600'
                        unoptimized
                    />
                </div>
            )}
            
            {/* Invite Button */}
            <Button className='gap-2 flex text-sm h-8 
                               bg-blue-700 hover:bg-blue-800 dark:bg-sky-400 dark:hover:bg-sky-500'>
                <Send className='h-4 w-4' />
                Invite
            </Button>
        </div>
    );
}

export default Header;
