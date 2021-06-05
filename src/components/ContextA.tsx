import { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'

export const ContextA: VFC = () => {
  const { dark, setDark } = useStateContext()
  console.log('rendered ContextA')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">Context A</p>
      <p className="my-3">{dark ? 'on' : 'off'}</p>
      <button
        className="px-3 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
        onClick={() => setDark(!dark)}
      >
        toggle mode
      </button>
    </div>
  )
}
