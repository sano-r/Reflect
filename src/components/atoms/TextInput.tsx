import { Textarea, TextareaProps } from "@chakra-ui/react";
import { Field } from "../ui/field";
import React from "react";

interface Props{
    label: string;
    value: string;
    onChangeValue: (value: string) => void;
}

export function TextInput({label, value, onChangeValue}:Props & TextareaProps){
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeValue(e.target.value);
    };
    return(
        <Field label={label}>
            <Textarea value={value} onChange={handleChange} maxLength={140} />
        </Field>
    )
}