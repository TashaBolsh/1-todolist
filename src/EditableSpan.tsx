import React, {useState, ChangeEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let[editMode, setEditMode] = useState(false)
    let[title, setTitle] = useState("")

    const ectivateEditMode=()=>{
        setEditMode(true);
        setTitle(props.title);
    }

    const ectivateViewMode=()=>{
        setEditMode(false);
        props.onChange(title);
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)

    return editMode
        ? <TextField value={title} onChange={onChangeTitleHandler} onBlur={ectivateViewMode} autoFocus />
    : <span onDoubleClick={ectivateEditMode}>{props.title}</span>
}