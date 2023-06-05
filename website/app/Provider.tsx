"use client"

import { SessionProvider } from "next-auth/react"

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) {
  // @ts-ignore
  return <SessionProvider session={session}>{children}</SessionProvider>
}
