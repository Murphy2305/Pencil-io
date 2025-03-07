"use client"
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Warning from '@editorjs/warning';
import { useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { toast } from 'sonner';
import { FILE } from '../../dashboard/_components/FileList';
import { ToolConstructable } from '@editorjs/editorjs';

const rawDocument = {
    "time": 1550476186479,
    "blocks": [
        {
            data: {
                text: 'Document Name',
                level: 2
            },
            id: "123",
            type: 'header'
        },
        {
            data: {
                level: 4
            },
            id: "1234",
            type: 'header'
        }
    ],
    "version": "2.8.1"
};

function Editor({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {
    const ref = useRef<EditorJS | null>(null);
    const updateDocument = useMutation(api.files.updateDocument);
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        if (fileData) {
            initEditor();
        }

        return () => {
            if (ref.current) {
                ref.current.isReady
                    .then(() => {
                        ref.current?.destroy?.();
                        ref.current = null;
                    })
                    .catch((err) => console.error("Error destroying editor:", err));
            }
        };
    }, [fileData]);

    useEffect(() => {
        console.log("Trigger Value:", onSaveTrigger);
        if (onSaveTrigger) {
            onSaveDocument();
        }
    }, [onSaveTrigger]);

    const initEditor = async () => {
        // Destroy the existing editor instance before creating a new one
        if (ref.current) {
            try {
                await ref.current.isReady;
                ref.current.destroy?.();
            } catch (err) {
                console.warn("Editor destroy error:", err);
            }
            ref.current = null;
        }

        const editor = new EditorJS({
            tools: {
                header: {
                    class: Header as unknown as ToolConstructable,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter a Header'
                    }
                },
                list: {
                    class: List as unknown as ToolConstructable,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                paragraph: Paragraph,
                warning: Warning,
            },
            holder: 'editorjs',
            data: fileData?.document ? JSON.parse(fileData.document) : rawDocument
        });

        ref.current = editor;
    };

    const onSaveDocument = () => {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                console.log('Article data: ', outputData);
                updateDocument({
                    _id: fileId,
                    document: JSON.stringify(outputData)
                }).then(() => {
                    toast('Document Updated!');
                }).catch(() => {
                    toast("Server Error!");
                });
            }).catch((error) => {
                console.log('Saving failed: ', error);
            });
        }
    };

    return (
        <div>
            <div id='editorjs' className='ml-20'></div>
        </div>
    );
}

export default Editor;
