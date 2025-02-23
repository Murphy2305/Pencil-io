import { ModeToggle } from '@/components/global/mode-toggle';
import { Button } from '@/components/ui/button';
import { Link, Save } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function WorkspaceHeader({ onSave, fileName }: any) {
  console.log(fileName);
  
  return (
    <div className="p-3 border-b flex justify-between items-center bg-white dark:bg-black border-gray-300 dark:border-gray-700">
      <div className="flex gap-2 items-center">
        <Image
          src={'/Logo1.png'}
          alt="logo"
          height={50}
          width={70}
        />
        <h2 className="text-black dark:text-gray-200">{fileName}</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px] gap-2 bg-yellow-500 hover:bg-yellow-600 
          dark:bg-yellow-400 dark:hover:bg-yellow-500 text-black dark:text-gray-900"
          onClick={onSave}
        >
          <Save className="h-4 w-4" /> Save
        </Button>
        <Button
          className="h-8 text-[12px] gap-2 bg-blue-700 hover:bg-blue-800 
          dark:bg-sky-400 dark:hover:bg-sky-500 text-white dark:text-black"
        >
          Share <Link className="h-4 w-4" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
