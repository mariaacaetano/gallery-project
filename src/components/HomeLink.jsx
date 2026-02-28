import { Link } from "react-router-dom";

function HomeLink() {
  return (
    <div>
      <div id="interacao">
        <p>
          <Link to="/">Página Inicial</Link>
        </p>
      </div>
    </div>
  );
}

export default HomeLink;