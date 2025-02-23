"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '../../../../../convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { ModeToggle } from '@/components/global/mode-toggle'

function CreateTeam() {
  const [teamName, setTeamName] = useState('');
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email
    }).then(resp => {
      console.log(resp);
      if (resp) {
        router.push('/dashboard');
        toast('Team created successfully!!!');
      }
    });
  };

  return (
    <div className="relative min-h-screen px-6 md:px-16 flex flex-col items-center justify-center">
      {/* Mode Toggle - Top Right */}
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>

      {/* Logo - Adjusted Position */}
      <div className="mb-8 flex justify-center">
        <Image src="/Logo1.png" alt="logo" width={160} height={160} />
      </div>

      {/* Team Name Form */}
      <div className="flex flex-col items-center w-full max-w-lg">
        <h2 className="font-bold text-3xl sm:text-4xl text-center py-3">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500 text-center">
          You can always change this later from settings.
        </h2>

        {/* Input Field */}
        <div className="mt-7 w-full px-4 sm:px-0">
          <label className="text-gray-500 block">Team Name</label>
          <Input 
            placeholder="Team Name"
            className="mt-3 w-full"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>

        {/* Button */}
        <Button
          className="bg-blue-500 mt-9 w-full sm:w-1/3 hover:bg-blue-600"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={createNewTeam}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
