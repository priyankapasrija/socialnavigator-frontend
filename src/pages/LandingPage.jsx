import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const chatpage = () => {
    navigate("/chatpage");
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          onClick={chatpage}
        >
          Go to Navigator
        </button>
      </div>
    </>
  );
};

export default LandingPage;
