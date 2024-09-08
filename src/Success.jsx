import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex h-screen items-center justify-center text-lg flex-col gap-4">
      <div>Payment Success</div>
      <Link
        className="btn btn-outline mb-20 border-2 border-amber-500 bg-transparent text-xl text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default Success;
