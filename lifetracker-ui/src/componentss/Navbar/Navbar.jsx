import "./Navbar.css";

export default function () {
  return (
    <ul className="navbar">
      <img
        className="image"
        src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
      />
      <li className="tag">Activity</li>
      <li className="tag">Exercise</li>
      <li className="tag"> Nutrition</li>
      <li className="tag"> Sleep </li>
    </ul>
  );
}
