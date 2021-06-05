import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, selectCount } from '../slices/counterSlice'

export const RTKitA: VFC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  console.log('rendered RTKitA')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitA</p>
      {count}
      <button
        className="px-3 py-2 mt-3 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
