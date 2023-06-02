import { Metadata } from "next"
import Link from "next/link"

import UserLoginForm from "@/components/UserLoginForm"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

const page = () => {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <UserLoginForm />
        </div>
      </div>
    </main>
  )
}

export default page
