import "./styles/style.css";
import ComponentA from "./component/props/ComponentA";
function App() {
  let insName = "Trisect";
  return (
    <>
      <h2 style={{ color: "red" }}>App Component</h2>{" "}
      <p className="para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit eius
        delectus explicabo vero distinctio,{" "}
        <b> {insName.toLocaleUpperCase()}</b> ratione aperiam corporis ipsa
        excepturi itaque ea iusto aliquid voluptatum inventore accusamus fugiat
        hic sit quisquam.
      </p>
      <ComponentA />
    </>
  );
}

// function AppOne() {
//   return <h2>Appone Component</h2>;
// }

export default App; // default export
//export { AppOne }; // naming export
