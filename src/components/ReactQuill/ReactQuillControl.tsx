import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { CustomToolbar } from "./CustomToolbar";

export function ReactQuillControl() {
    const [value, setValue] = useState('')
    const [editor, setEditor] = useState<ReactQuill | null>(null)

    const modules = {
        toolbar: {
            container: "#toolbar"
        }
    }

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color"
    ]

    const handleChange = (html: string) => {
        console.log(html)
        setValue(html)
    }
        

    return (
        <div className="editor__block">
            <h3>ReactQuill</h3>
            <CustomToolbar value={value} quill={editor} />
            <ReactQuill 
                ref={el => setEditor(el)}
                theme="snow" 
                placeholder="Введите текст..."
                modules={modules}
                formats={formats}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
