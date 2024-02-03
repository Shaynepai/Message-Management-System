const Profile_Update_Child = () => {
  return (
    <div className="mt-3">
      <div className="flex grid-cols-2 gap-1">
        <div className="grow">
          <input
            className="border w-full rounded-lg p-1 focus:outline-1  focus:outline-sky-500 "
            type="text"
          />
        </div>
        <button className="bg-primary/45 hover:bg-primary/80 rounded-lg p-1 duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile_Update_Child;
