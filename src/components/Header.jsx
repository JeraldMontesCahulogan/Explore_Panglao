import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-300 p-4 shadow-md text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600">Tailwind CSS</h1>
        <div className="flex space-x-4">
          <Link to="/">
            <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">Utilities</button>
          </Link>
          <Link to="/cards">
            <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">Cards</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
