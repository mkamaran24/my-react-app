export default function Dice(props) {
  const styleComp = {
    backgroundColor: props.status ? "#59E391" : "white",
  };
  return (
    <button onClick={props.hold} style={styleComp}>
      {props.value}
    </button>
  );
}
