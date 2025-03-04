import { Input, InputProps } from "@chakra-ui/react";
import { Field } from "../ui/field";

interface Props<T = string> {
  label: string;
  value: T;
  onChangeValue: (value: T) => void;
}

export function SingleInput<T = string>({
  label,
  value,
  onChangeValue,
  ...rest
}: Props<T> & InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value as T);
  };

  return (
    <Field label={label}>
      <Input value={value as string} onChange={handleChange} {...rest} />
    </Field>
  );
}