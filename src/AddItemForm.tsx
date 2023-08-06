import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField, IconButton} from "@mui/material";
import {ControlPoint} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTask();
        }
    }
    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    return <div>
        <TextField value={title}
                   variant={'outlined'}
                   label={'Type value'}
               onChange={onChangeHandler}
               onKeyDown={onKeyPressHandler}
                   error={!!error}
               helperText={error}/>
        <IconButton onClick={addTask} color={'primary'}>
            <ControlPoint/>
        </IconButton>
    </div>
}