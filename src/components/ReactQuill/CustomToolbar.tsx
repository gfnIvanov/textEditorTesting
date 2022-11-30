import React from "react";
import ReactQuill from "react-quill";
import { CustomButton } from "./CustomButton";

type CustomToolbarProps = {
    value: string
    quill: ReactQuill | null
}

export function CustomToolbar({ value, quill }: CustomToolbarProps) {
    return (
        <div id="toolbar">
            <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                <option value="1" />
                <option value="2" />
                <option selected />
            </select>
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-customBtn">
                <CustomButton value={value} quill={quill} />
            </button>
        </div>
    )
}