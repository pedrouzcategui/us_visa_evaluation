import { Metadata } from "next"
import { Quiz } from "@/components"
import { questions } from "../questions"

export const metadata: Metadata = {
  title: "Quiz B1/B2",
}

export default function Home() {
  return (
    <>
      <Quiz questions={questions} />
    </>
  )
}
