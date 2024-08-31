import { Check } from 'phosphor-react';
import { Container } from './style';
import { useState } from 'react';

type InputButtonToggleProps = {
  name: string;
  title: string;
  id: string;
  checked?: boolean;
  onToggle?: (value: boolean) => void;
};
export function InputButtonToogle({
  id,
  name,
  title,
  onToggle,
  checked,
}: InputButtonToggleProps) {
  const [isChecked, setIsChecked] = useState(() => checked || false);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onToggle) {
      onToggle(newChecked);
    }
  };

  return (
    <Container isChecked={isChecked}>
      <p>{title}</p>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleChange}
          defaultChecked={false}
        />
        <button>
          <Check />
        </button>
      </label>
    </Container>
  );
}
