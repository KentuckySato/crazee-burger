import { BsPersonCircle } from "react-icons/bs"

type Props = {
  username: string | undefined
}

export default function RightSide({ username }: Props) {
  return (
    <div>
      <div>Hey, {username}</div>
      <div><BsPersonCircle /></div>
    </div>
  )
}
