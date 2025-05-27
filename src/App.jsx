import { useFormStatus } from "react-dom";

const App = () => {
  const submitHandler = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("res");
  };
  const Inputs = () => {
    const { pending } = useFormStatus();
    return (
      <>
        <input type="<text>" />
        <br></br>
        <input type="password" />
        <br></br>
        <button disabled={pending}>{pending ? "submiting" : "submit"}</button>
      </>
    );
  };
  return (
    <div>
      <h1>Forword Ref</h1>
      <form action={submitHandler}>
        <Inputs />
      </form>
    </div>
  );
};

export default App;
