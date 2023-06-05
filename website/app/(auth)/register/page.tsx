import React, { FunctionComponent } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import UserRegisterForm from "@/components/UserRegisterForm"
import { Icons } from "@/components/icons"

interface OwnProps {}

type Props = OwnProps

const page: FunctionComponent<Props> = (props) => {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-4 top-4 md:left-8 md:top-8"
            )}
          >
            <>
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back
            </>
          </Link>
          <UserRegisterForm />
        </div>
      </div>
    </main>
  )
}

export default page
