import React from "react";
import ReactQuill from "react-quill";
import { parse } from 'node-html-parser';

type CustomButtonProps = {
    value: string
    quill: ReactQuill | null
}

export function CustomButton({ value, quill }: CustomButtonProps) {
    const btnHandler = () => {
        let input = parse(value).text
        let select = quill?.getEditorSelection()
        let [begin, end] = [select!.index, select!.index + (select!.length - 1)]
        let result = Array.prototype.map.call(input, (char, i) => i >= begin && i <= end ? char.toUpperCase() : char)
        quill?.setEditorContents(quill.getEditor(), result.join(''))
    }

    return (
        <div onClick={btnHandler}>
            <strong>Test</strong>
        </div>
    )
}