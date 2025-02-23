import { Button } from '@/components/ui/button';
import { Archive, Flag, Github } from 'lucide-react';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Flag,
      path: '',
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      path: '',
    },
    {
      id: 3,
      name: 'Archive',
      icon: Archive,
      path: '',
    },
  ];
  const [fileInput, setFileInput] = useState('');

  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className='flex gap-2 p-1 px-2 text-[14px] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer'
        >
          <menu.icon className='h-5 w-5' />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button */}
      <Dialog>
        <DialogTrigger className='w-full' asChild>
          <Button className='w-full bg-blue-700 hover:bg-blue-800 dark:bg-sky-400 dark:hover:bg-sky-500 justify-start mt-3'>
            New File
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-white dark:bg-black text-black dark:text-gray-200'>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input
                placeholder='Enter File Name'
                className='mt-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                onChange={(e) => setFileInput(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type='button'
                className='bg-blue-700 hover:bg-blue-800 dark:bg-sky-400 dark:hover:bg-sky-500 pointer'
                disabled={!(fileInput && fileInput.length > 3)}
                onClick={() => onFileCreate(fileInput)}
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Progress Bar */}
      <div className='h-4 w-full bg-gray-400 dark:bg-gray-800 rounded-full mt-5'>
        <div
          className='h-4 bg-blue-700 dark:bg-sky-400 rounded-full'
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>

      <h2 className='text-[12px] mt-3'>
        <strong>{totalFiles}</strong> out of <strong>5</strong> files used
      </h2>
      <h2 className='text-[12px] mt-1'>Upgrade your plan for unlimited access.</h2>
    </div>
  );
}

export default SideNavBottomSection;
