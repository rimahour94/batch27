import ComponentB from "./ComponentB";
function ComponentA() {
  return (
    <>
      <h2>Component A</h2>
      <ComponentB data="Ritesh" arr={["Tushar", "Ritesh", "Ankit", "Rahul"]} />
    </>
  );
}
export default ComponentA;
