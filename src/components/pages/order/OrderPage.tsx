import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <div>
      <Navbar username={username} />
      <h1>Bonjour { username }</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  )
}
