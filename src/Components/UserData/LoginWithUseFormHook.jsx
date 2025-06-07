import { useActionState } from "react";

const LoginWithUseFormHook = () => {
  const callBackHandler = (previousD, formData) => {
    let uname = formData.get("username");
    let pass = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;
    console.log("pass length", pass.length);
    if (!uname || uname.length > 5) {
      return {
        error: "please enter valid username and more then 5 characters ",
        uname,
        pass,
      };
    } else if (!pass || !regex.test(pass)) {
      return {
        error:
          "please enter password and  valid password with special characters",
        uname,
        pass,
      };
    } else {
      return { success: "login successfull", uname, pass };
    }
  };
  const [data, action, iSpending] = useActionState(callBackHandler);

  console.log("ddds", iSpending);

  return (
    <>
      <div>
        <h2>Login form with validation with useActionState </h2>
        {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
        {data?.success && (
          <span style={{ color: "green" }}>{data.success}</span>
        )}
        <form action={action}>
          <input
            type="text"
            defaultValue={data?.uname}
            name="username"
            id=""
            placeholder="enter name"
          />
          <br />
          <br />
          <input
            type="text"
            name="password"
            defaultValue={data?.pass}
            id=""
            placeholder="enter password"
          />
          <br />
          <br />
          <button disabled={iSpending}>Login</button>
        </form>
      </div>
    </>
  );
};
export default LoginWithUseFormHook;
