const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      step="0.0001"
      value={props.value}
      onChange={(e) => props.handleChange(e, props.name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism"
    ></input>
  );
};

export default Input;
