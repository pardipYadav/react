import { useActionState } from "react";

const App = () => {
  const handleForm = async (prevousepreviousState, FormData) => {
    let uName = FormData.get("username");
    let upass = FormData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    if (uName && upass) {
      return { message: "Data submited ", uName, upass };
    } else {
      return { error: " Failed to submit enter proper data", uName, upass };
    }
  };
  const [state, formAction, isPending] = useActionState(handleForm, undefined);
  return (
    <div>
      <h1>UseActionState Hook</h1>
      <form action={formAction}>
        <input type="text" name="username" placeholder="enter username" />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="enter password"
        />
        <br />
        <br />
        <button disabled={isPending} type="submit">
          Submit
        </button>
        <br />
        <br />
        {state?.message && (
          <span style={{ color: "green" }}>{state?.message}</span>
        )}
        {state?.error && <span style={{ color: "red" }}>{state?.error}</span>}
      </form>
      <h4>userName:{state?.uName}</h4>
      <h4>userPass:{state?.upass}</h4>
    </div>
  );
};

export default App;
