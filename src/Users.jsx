/********* old school style before 19 version ***********/

/*import { forwardRef } from "react";

const Users = (props, ref) => {
  return (
    <>
      <div>
        <input type="text" ref={ref} />
      </div>
    </>
  );
};

export default forwardRef(Users);*/

/********* old school style before 19 version ***********/

const Users = (props) => {
  return (
    <>
      <div>
        <input type="text" ref={props.ref} />
      </div>
    </>
  );
};
export default Users;
