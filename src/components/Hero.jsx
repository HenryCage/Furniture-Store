import { BsSearch } from "react-icons/bs";

export default function Hero() {
  return (
    <div>
        <div className="hero">
            <div className="overlay">
                <div className="content">
                    <h1>Make Your Interior More Minimalistic & Modern</h1>
                    <p>
                        Turn your room with Panto into a lot more minimalist and modern with ease and speed.
                    </p>

                    <div className="search-bar">
                        <input type="text" placeholder="Search Furniture" />
                        <button><BsSearch /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
