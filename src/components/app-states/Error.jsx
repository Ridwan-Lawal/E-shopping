/* eslint-disable react/prop-types */
function Error({ errMessage = "error" }) {
  return (
    <div className="text-blue-950 font-medium flex flex-col gap-4 h-screen justify-center items-center text-2xl w-screen">
      <p className="text-4xl">😕</p>
      <p>
        {errMessage === "Failed to fetch"
          ? "Please connect to the internet"
          : errMessage}
        !
      </p>
    </div>
  );
}

export default Error;
