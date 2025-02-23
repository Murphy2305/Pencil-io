import { FileListContext } from '@/app/_context/FilesListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Archive, MoreHorizontal } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';

export interface FILE{
  archive:boolean,
  createdBt:string,
  document:string,
  fileName:string,
  teamId:string,
  whiteboard:string,
  _id:string,
  _creationTime:number
}
function FileList() {
  const {fileList_,setFileList_}=useContext(FileListContext);
  const [fileList,setFileList]=useState<any>();
  const {user}:any=useKindeBrowserClient();
  const router=useRouter();

  useEffect(()=>{
    fileList_&&setFileList(fileList_);
  },[fileList_])

  return (
    <div className='mt-10'>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 text-sm">
          <thead className="ltr:text-left rtl:text-right bg-white dark:bg-gray-900">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">File Name</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">Created At</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">Edited</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">Author</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200"></td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {fileList && fileList.map((file:FILE, index:number) => (
              <tr key={index} 
                  className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'} cursor-pointer`} 
                  onClick={() => router.push('/workspace/'+file._id)}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-200">{file.fileName}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  {user && <Image src={user?.picture} alt='user' width={30} height={30} className='rounded-full'/>}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white dark:bg-gray-800'>
                      <DropdownMenuItem className='gap-3 text-gray-900 dark:text-gray-200'>
                        <Archive className='h-4 w-4'/> Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FileList
