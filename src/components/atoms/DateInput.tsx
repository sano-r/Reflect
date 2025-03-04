import { SingleInput } from "./SingleInput";
import { InputProps } from "@chakra-ui/react";

interface DateInputProps extends Omit<InputProps, "type"> {
  label: string;
  value: string;
  onChangeValue: (value: string) => void;
}

export function DateInput({ label, value, onChangeValue, ...rest }: DateInputProps) {
  return (
    <SingleInput
      label={label}
      value={value}
      onChangeValue={onChangeValue}
      type="date"
      {...rest}
    />
  );
}