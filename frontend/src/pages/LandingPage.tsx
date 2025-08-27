import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-6">
      {/* App Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white text-center mb-6 py-4">
        Welcome to <span className="text-indigo-400">Second Brain | Digital Brain</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-300 text-center mb-8 max-w-2xl">
        "Capture knowledge, save important content, and build your own digital brain.
        With digital brain, you can store Youtube videos, X posts, and documents - all
        neatly organized and easy to find. You can even share your digital brain with anyone, anywhere!"
      </p>

      {/* Call-to-Action Button */}
      <Button
        name="Get Started"
        type="primary"
        size="lg"
        onClickHandler={redirectToDashboard}
      />
    </div>
  );
};

export default LandingPage;
