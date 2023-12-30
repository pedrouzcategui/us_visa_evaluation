'use client'
import { Quiz } from "@/components"
import { store } from "@/store/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Quiz />
      </Provider>
    </>
  )
}
