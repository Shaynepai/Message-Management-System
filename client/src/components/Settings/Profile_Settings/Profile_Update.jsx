import { useState } from "react";
import Profile_Update_Child from "./Profile_Update_Edit";

const Profile_Update = () => {
  const [showChildCompName, setShowChildCompName] = useState(false);
  const [showChildCompEmail, setShowChildCompEmail] = useState(false);
  const [showChildCompPass, setShowChildCompPass] = useState(false);
  const onBtnClickName = (e) => {
    e.preventDefault();
    setShowChildCompName((prevState) => !prevState);
  };
  const onBtnClickEmail = (e) => {
    e.preventDefault();
    setShowChildCompEmail((prevState) => !prevState);
  };
  const onBtnClickPass = (e) => {
    e.preventDefault();
    setShowChildCompPass((prevState) => !prevState);
  };

  return (
    <>
      <div className="h-screen p-1.5">
        <h1 className="text-lg font-semibold text-center my-12 sm:text-start md:text-center lg:text-center xl:text-center ">Profile Account</h1>
        <div className="grid grid-cols-1 border rounded-xl shadow-md justify-around max-w-xl mx-auto my-[3rem] sm:my-[8rem] md:my-[8rem] lg:my-[8rem] xl:my-[8rem] gap-8 p-3">
          {/* Name */}
          <div>
            <h1 className="font-semibold">Name</h1>
            <div className="flex justify-between">
              <div>
                <div>Roberto Rodriquez Tupaz</div>
              </div>
              <button onClick={onBtnClickName} className="underline">
                Edit
              </button>
            </div>
            {/* Child Component */}
            {showChildCompName && <Profile_Update_Child />}
          </div>

          {/* Division */}
          <div className="mx-5">
            <hr />
          </div>

          {/* Email */}
          <div>
            <h1 className="font-semibold">Email</h1>
            <div className="flex justify-between">
              <div>
                <div>RobertoRodriquezTupaz@gmail.com</div>
              </div>
              <button onClick={onBtnClickEmail} className="underline">
                Edit
              </button>
            </div>
            {/* Child Component */}
            {showChildCompEmail && <Profile_Update_Child />}
          </div>

          {/* Division */}
          <div className="mx-5">
            <hr />
          </div>

          {/* Password */}
          <div>
            <h1 className="font-semibold">Password</h1>
            <div className="flex justify-between">
              <div>
                <div>********</div>
              </div>
              <button onClick={onBtnClickPass} className="underline">
                Edit
              </button>
            </div>
            {/* Child Component */}
            {showChildCompPass && <Profile_Update_Child />}
          </div>
        </div>

        {/* <div>

      <button className='btn btn-primary' onClick={onBtnClick}>Click here</button>
      {showChildComp && <Child /> }
    </div>
   */}
      </div>
    </>
  );
};

export default Profile_Update;
