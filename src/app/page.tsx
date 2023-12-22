import { Metadata } from "next"
import { Quiz } from "@/components"
import { questions } from "../questions"

export const metadata: Metadata = {
  title: "HomePage",
  description: "Something about the Homepage"
}

export default function Home() {
  return (
    <>
      <Quiz questions={questions} />
    </>
  )
}
