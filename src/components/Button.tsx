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
const Button: () => React.JSX.Element = () => {
  //   const MyComp = () => <h3>My Component</h3>
  const ButtonTitle: () => React.JSX.Element = () => {
    const availableMoney: number = 1001;
    const text: string = availableMoney > 1000 ? "More than 1000" : "Less than or equal to 1000"

    return <h3>{text}</h3>;
  };

  return (
    <button className="counter" onClick={() => alert("You clicked me!")}>
      <ButtonTitle />
    </button>
  );
}



export default Button