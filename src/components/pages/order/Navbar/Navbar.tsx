import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

type Props = {
    username: string | undefined
}

export default function Navbar({username}: Props) {
    return (
        <nav className="navbar">
            <LeftSide />
            <RightSide username={username} />
        </nav>
    )
}
