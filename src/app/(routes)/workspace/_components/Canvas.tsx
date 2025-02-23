import React, { useEffect, useState } from 'react';
import { Excalidraw, MainMenu, WelcomeScreen } from '@excalidraw/excalidraw';
import { FILE } from '../../dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { useTheme } from 'next-themes';

function Canvas({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any; fileId: any; fileData: FILE }) {
  const { theme } = useTheme();
  const [whiteBoardData, setWhiteBoardData] = useState<any>();

  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then((resp) => console.log(resp));
  };

  return (
    <div
      className="h-[670px] border border-gray-300 dark:border-gray-600 rounded-md"
      style={{
        backgroundColor: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#000000',
      }}
    >
      {fileData && (
        <Excalidraw
          theme={theme === 'dark' ? 'dark' : 'light'}
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          }}
          onChange={(excalidrawElements, appState, files) => setWhiteBoardData(excalidrawElements)}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
              toggleTheme: false,
            },
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}

export default Canvas;
