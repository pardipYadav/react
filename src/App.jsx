import Wrapper from "./Wrapper";
const App = () => {
  return (
    <div>
      <h1>Default Props in react js</h1>
      {/* <Wrapper name="vijay" />
      <Wrapper name="hellll" />
      <Wrapper name="pawan kumar" /> */}
      <Wrapper color="red">
        <h1>hello world</h1>
      </Wrapper>
      <Wrapper color="blue">
        <h1>hello world1</h1>
      </Wrapper>
      <Wrapper>
        <h1>hello world2 </h1>
      </Wrapper>
    </div>
  );
};

export default App;
