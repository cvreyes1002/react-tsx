/* Using Normal Function */
// function Button(): React.JSX.Element {
//   //   const MyComp = () => <h3>My Component</h3>
//   const ButtonTitle: () => React.JSX.Element = () => {
//     const availableMoney: number = 1001;
//     const text: string = availableMoney > 1000 ? "More than 1000" : "Less than or equal to 1000"

//     return <h3>{text}</h3>;
//   };

//   return (
//     <button className="counter" onClick={() => alert("You clicked me!")}>
//       <ButtonTitle />
//     </button>
//   );
// }

/* Using Arrow Function */
// const Button: () => React.JSX.Element = () => {
//   //   const MyComp = () => <h3>My Component</h3>
//   const ButtonTitle: () => React.JSX.Element = () => {
//     const availableMoney: number = 1001;
//     const text: string = availableMoney > 1000 ? "More than 1000" : "Less than or equal to 1000"

//     return <h3>{text}</h3>;
//   };

//   return (
//     <button className="counter" onClick={() => alert("You clicked me!")}>
//       <ButtonTitle />
//     </button>
//   );
// }
import { useState } from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  onChange?: (id: number) => void;
  objArr?: ObjArr[];
  setState?: React.Dispatch<React.SetStateAction<string>>
};

interface ObjArr {
  id: string;
  title: string;
}

// function Button({ title, onClick }: ButtonProps): React.JSX.Element {
//   return <button onClick={onClick}>{title}</button>
// }

const Button = ({ title, onClick, disabled, setState }: ButtonProps) => {
  const [counter, setCounter] = useState<number>(0);
  const string = disabled ? "disabled" : title + "number of clicks: " + counter;

  function handleClick() {
    onClick();
    setCounter(counter + 1)
    if (setState) {
      setState("")
    }
  }


  return (
    <button disabled={disabled} onClick={handleClick}>{string}</button>
  );
};

export default Button;
