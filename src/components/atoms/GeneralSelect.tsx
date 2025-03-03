import { CollectionItem, ListCollection } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from "../ui/select";
import { ValueChangeDetails } from "@zag-js/select";

interface Option extends CollectionItem{
    id: string;
    value: string;
}

interface Props{
    label: string;
    value: string[];
    placeholder: string;
    options: ListCollection<Option>;
    onChangeValue: (details: ValueChangeDetails<Option>) => void;
  }

export function GeneralSelect({label, value, placeholder, options, onChangeValue} :Props) {
    return (
        <Field>
            <SelectRoot collection={options} value={value} onValueChange={onChangeValue}>
                <SelectLabel>{label}</SelectLabel>
                <SelectTrigger>
                    <SelectValueText placeholder={placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    {options.items.map((item) => (
                        <SelectItem key={item.id} item={item}>
                            {item.value}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
        </Field>
    )
}