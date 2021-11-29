import React from 'react'
import { FC } from 'react'
import { SectionHeader } from '../text/sectionHeader'

// export type CountDownTimerProps = {
//   days: number
//   hours: number
//   minutes: number
//   seconds: number
// }

export const CountDownTimer: FC = () => {
  const now: Date = new Date()
  const weddingDate: Date = new Date(2022, 4, 5, 0, 0)
  const left = weddingDate - now

  // 現在から結婚式までの日数を計算
  const d = Math.floor(left / 1000 / 60 / 60 / 24)
  // 時間を計算
  const h = Math.floor(left / 1000 / 60 / 60) % 24
  // 分を計算
  const m = Math.floor(left / 1000 / 60) % 60
  // 秒を計算
  const s = Math.floor(left / 1000) % 60

  const [[ds, hrs, mins, secs], setTime] = React.useState([d, h, m, s])

  const tick = () => {
    if (ds === 0 && hrs === 0 && mins === 0 && secs === 0) {
      reset()
    } else if (hrs === 0 && mins === 0 && secs === 0) {
      setTime([ds - 1, 23, 59, 59])
    } else if (mins === 0 && secs === 0) {
      setTime([ds, hrs - 1, 59, 59])
    } else if (secs === 0) {
      setTime([ds, hrs, mins - 1, 59])
    } else {
      setTime([ds, hrs, mins, secs - 1])
    }
  }

  const reset = () =>
    setTime([parseInt(d), parseInt(h), parseInt(m), parseInt(s)])

  React.useEffect(() => {
    const timeId = setInterval(() => tick(), 1000)
    return () => clearInterval(timeId)
  })

  return (
    <div className="h-screen grid justify-center text-center">
      <SectionHeader font="font-serif" text="COUNT DOWN"></SectionHeader>
      <div>
        <div>
          <p className="font-serif text-5xl text-center mb-40">
            2022.05.05 まで
          </p>
        </div>
        <div className="flex flex-row">
          <div className="mx-4">
            <span className="font-serif text-2xl lg:text-5xl">{`${ds}`}</span>
            <br />
            <span>DAYS</span>
          </div>
          <div className="mx-4">
            <span className="font-serif text-2xl lg:text-5xl">{`${hrs
              .toString()
              .padStart(2, '0')}`}</span>
            <br />
            <span>HOURS</span>
          </div>
          <div className="mx-4">
            <span className="font-serif text-2xl lg:text-5xl">{`${mins
              .toString()
              .padStart(2, '0')}`}</span>
            <br />
            <span>MINUTES</span>
          </div>
          <div className="mx-4">
            <span className="font-serif text-2xl lg:text-5xl">{`${secs
              .toString()
              .padStart(2, '0')}`}</span>
            <br />
            <span>SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
