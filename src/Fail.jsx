import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-lg">
      <div>Payment Fail</div>
      <Link
        className="btn btn-outline mb-20 border-2 border-amber-500 bg-transparent text-xl text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default Fail;
