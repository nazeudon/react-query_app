import { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'

export const ContextB: VFC = () => {
  const { setDark } = useStateContext()
  console.log('rendered ContextB')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">Context B</p>
      <button
        className="px-3 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700"
        onClick={() => setDark(false)}
      >
        dark mode off
      </button>
    </div>
  )
}
