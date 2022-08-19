import { Form, Button as Bbutton } from "react-bootstrap";

type InputProps = {
  type: string;
  text: string;
  change: any;
  value: string;
};
export function Input({ type, text, change, value }: InputProps) {
  return (
    <Form.Control
      type={type}
      placeholder={text}
      onChange={change}
      value={value}
      min={0}
      className="my-2"
    />
  );
}

type ButtonProps = {
  type: string;
  text: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ type, text, click }: ButtonProps) {
  return (
    <Bbutton className="mb-2" variant={type} type="submit" onClick={click}>
      {text}
    </Bbutton>
  );
}
