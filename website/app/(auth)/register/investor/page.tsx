import React, { FunctionComponent } from "react"

import { Separator } from "@/components/ui/separator"
import InvestorForm from "@/components/InvestorForm"

interface OwnProps {}

type Props = OwnProps

const page: FunctionComponent<Props> = (props) => {
  return (
    <>
      <InvestorForm />
    </>
  )
}

export default page
