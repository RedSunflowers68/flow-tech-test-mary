import React from 'react';
import {FormLabel} from "../../styles/Typogragphy.styles";
import {Select} from "../../styles/Form.styles";

type Props = {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField = ({id, options, label, value, onChange}: Props) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <Select id={id} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={`option-${index}`}  value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
}
