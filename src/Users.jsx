/********* old school style before 19 virsion ***********/

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

/********* old school style before 19 virsion ***********/

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
