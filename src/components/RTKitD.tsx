import { VFC } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMode } from '../slices/counterSlice'

export const RTKitD: VFC = () => {
  const mode = useAppSelector(selectMode)
  console.log('rendered RTKitD')

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">RTKitD</p>
      <p className="text-blue-500">{mode ? 'on' : 'off'}</p>
    </div>
  )
}
