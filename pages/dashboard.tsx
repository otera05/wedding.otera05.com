import React from 'react'
import type { NextPage } from 'next'
import { SectionHeader } from '../src/components/text/sectionHeader'
import { CountDownTimer } from '../src/components/timer'

const DashBoard: NextPage = () => {
  return (
    <div className="font-serif">
      <div className="h-screen bg-blue-400">ダッシュボードよ！</div>
      <div className="h-screen bg-green-400">
        {/* TODO: グリーティングコンポーネントに切り出し */}
        <p className="leading-loose px-8 lg:text-2xl lg:leading-loose lg:text-center">
          拝啓 <br />
          <br />
          皆様におかれましてはますますご清祥のこととお慶び申し上げます
          <br />
          このたび私たちは結婚式を挙げることになりました
          <br />
          つきましては皆様により一層のご指導を賜りたく
          <br />
          ささやかではございますが披露宴を催したく存じます
          <br />
          ご多用中誠に恐縮ではございますがぜひご出席をいただきたく
          <br />
          ご案内申し上げます
          <br />
          <br />
          謹白
          <br />
          <br />
          令和○年○月吉日
          <br />
          <br />
          おてら・ありすん
          <br />
        </p>
      </div>
      {/* カウントダウンコンポーネント */}
      <div className="h-screen bg-blue-200 grid justify-center text-center">
        <CountDownTimer
          days="0"
          hours="0"
          minutes="0"
          seconds="0"
        ></CountDownTimer>
      </div>
      {/* TODO: インフォメーションコンポーネントに切り出し */}
      <div className="h-auto bg-pink-200 grid justify-center text-center">
        <SectionHeader font="font-serif" text="INFORMATION"></SectionHeader>
        <div>
          <div className="mb-4">
            <span className="text-2xl">WEDDING CEREMONY</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl">挙式・披露宴</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl">2022.05.05 Thu</span>
          </div>
          <div className="mb-4">
            <span className="text-4xl">挙式/ 11:00</span>
          </div>
          <div className="mb-8">
            <span className="text-2xl">受付/ 10:30</span>
          </div>
          <div className="mb-4">
            <span className="text-4xl">披露宴/ 13:00</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl">受付/ 12:30</span>
          </div>
        </div>
        <div>
          <div>
            <span className="text-2xl">ACCESS</span>
          </div>
          TODO: Google Map を埋め込み
        </div>
        <div className="font-serif">
          <div className="text-center mb-4">
            <p className="text-2xl mb-4">― 感染予防対策について ―</p>
            <p className="leading-loose lg:text-xl lg:leading-loose">
              安心してお楽しみいただくため
              <br />
              皆様の安全と健康を最優先に考えた
              <br />
              感染拡大防止対策を施します
              <br />
              会場各所に手指消毒剤を設置し
              <br />
              パブリックエリアの消毒強化
              <br />
              全ての関係者にフェイスマスクや
              <br />
              手袋の着用を実施
              <br />
              また ご入館の際には 全ての方々に
              <br />
              検温とマスク着用と手指の消毒を
              <br />
              会場内ではソーシャルディスタンスの確保など
              <br />
              ご協力よろしくお願いいたします
              <br />
            </p>
          </div>
          TODO: Google Map を埋め込み
        </div>
      </div>
      <div className="h-auto bg-pink-200 grid justify-center text-center">
        <SectionHeader font="font-serif" text="INVITATION"></SectionHeader>
        <p>下記のボタンより出欠情報のご入力をお願い申し上げます</p>
        <button className="rounded-lg bg-red-500 text-red-100">
          <span className="my-2 py-10">出欠を回答する</span>
        </button>
      </div>
      <div>ここにフッターを作る</div>
    </div>
  )
}

export default DashBoard
