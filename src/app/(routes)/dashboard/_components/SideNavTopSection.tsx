import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { Separator } from '@/components/ui/separator';
import { useConvex } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/global/mode-toggle';
import { max } from 'date-fns';

export interface TEAM {
    createdBy: string;
    teamName: string;
    _id: string;
}

function SideNavTopSection({ user,setActiveTeamInfo }: any) {
    // console.log(user);
    
    const menu = [
        {
            id: 1,
            name: 'Create Team',
            path: '/teams/create',
            icon: Users,
        },
        {
            id: 2,
            name: 'Settings',
            path: '',
            icon: Settings,
        },
    ];

    const router = useRouter();
    const convex = useConvex();
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    const [teamList, setTeamList] = useState<TEAM[]>();

    useEffect(() => {
        if (user) getTeamList();
    }, [user]);

    useEffect(() => {
        if (activeTeam) setActiveTeamInfo(activeTeam);
    }, [activeTeam]);

    const getTeamList = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email });
        setTeamList(result);
        setActiveTeam(result[0]);
    };

    const onMenuClick = (item: any) => {
        if (item.path) {
            router.push(item.path);
        }
    };

    return (
        <div className='p-1'>
            <Popover>
                <PopoverTrigger className="flex items-center p-[-4] rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-900 gap-[-2]">
                    <Image src="/Logo1.png" alt="logo" width={85} height={48} />
                    <h2 className="flex gap-2 items-center font-bold text-[17px] text-gray-900 dark:text-white">
                        {activeTeam?.teamName}
                        <ChevronDown />
                    </h2>
                </PopoverTrigger>
                <PopoverContent className="ml-7 p-4 bg-white text-gray-900 dark:bg-black dark:text-gray-400 rounded-lg shadow-md">
                    <div>
                        {teamList?.map((team, index) => (
                            <h2
                                key={index}
                                className={`p-2 rounded-lg mb-1 cursor-pointer transition-colors ${
                                    activeTeam?._id === team._id
                                        ? 'bg-blue-700 text-white dark:bg-sky-400'
                                        : 'hover:bg-blue-100 dark:hover:bg-gray-800 dark:text-gray-200'
                                }`}
                                onClick={() => setActiveTeam(team)}
                            >
                                {team.teamName}
                            </h2>
                        ))}
                    </div>
                    <Separator className="mt-2 bg-gray-200 dark:bg-gray-800" />

                    {/* Option Section */}
                    <div>
                        {menu.map((item, index) => (
                            <h2
                                key={index}
                                className="flex gap-2 items-center p-2 rounded-lg cursor-pointer text-sm text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900"
                                onClick={() => onMenuClick(item)}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </h2>
                        ))}
                        <LogoutLink>
                            <h2 className="flex gap-2 items-center p-2 rounded-lg cursor-pointer text-sm text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900">
                                <LogOut className="h-4 w-4" />
                                Logout
                            </h2>
                        </LogoutLink>
                        <span className="flex gap-2 items-center p-2 rounded-lg cursor-pointer text-sm text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900">
                            <ModeToggle></ModeToggle>Mode
                        </span>
                    </div>
                    <Separator className="mt-2 bg-gray-200 dark:bg-gray-800" />

                    {/* User Info Section */}
                    {user && (
                        <div className="mt-2 flex gap-2 items-center">
                            <Image
                                src={user?.picture}
                                alt="user"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            <div>
                                <h2 className="text-[14px] font-bold text-gray-900 dark:text-white">
                                    {user?.given_name} {user?.family_name}
                                </h2>
                                <h2 className="text-[12px] text-gray-500 dark:text-gray-400">
                                    {user?.email}
                                </h2>
                            </div>
                        </div>
                    )}
                </PopoverContent>
            </Popover>

            <Button
                variant="outline"
                className="w-full justify-start gap-2 font-bold mt-8 bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-800"
            >
                <LayoutGrid className="h-5 w-full" />
                All Files
            </Button>
        </div>
    );
}

export default SideNavTopSection;
