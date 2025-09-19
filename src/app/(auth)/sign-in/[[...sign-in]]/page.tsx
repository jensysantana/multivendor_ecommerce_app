import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div
      // className="bg-indigo-500 h-screen w-full flex justify-center"
      className="bg-indigo-500 h-screen w-full grid place-content-center"
    >
      <SignIn />
    </div>
  )
}
