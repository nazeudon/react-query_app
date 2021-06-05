import { VFC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { increment } from '../slices/counterSlice'

export const RTKitB: VFC = () => {
  const dispatch = useAppDispatch()
  console.log('rendered RTKitB')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitB</p>
      <button
        className="px-3 py-2 mt-3 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
