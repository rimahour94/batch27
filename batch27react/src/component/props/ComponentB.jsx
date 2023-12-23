function ComponentB(props) {
  // props will be in object format ex {key:"value"}
  // let props={ data:"Ritesh"}
  return (
    <>
      <h2>My name is {props.data} </h2>

      <ol>
        {props.arr.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ol>
    </>
  );
}

export default ComponentB;
