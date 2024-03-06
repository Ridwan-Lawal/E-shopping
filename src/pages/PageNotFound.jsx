import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="px-8">
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-900 items-center py-2 px-5 mt-5  text-white flex gap-3"
      >
        <FaArrowLeft />
        Back
      </button>
      <div className="h-screen flex flex-col items-center justify-center gap-3">
        <p className="text-3xl">😕</p>
        <p className="text-slate-900 text-3xl font-semibold">Page not Found!</p>
      </div>
    </div>
  );
}

export default PageNotFound;
