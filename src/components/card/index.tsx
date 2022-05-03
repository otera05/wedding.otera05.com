import { FC } from 'react'
import { useState } from 'react'
import { Image } from '../image'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

// スタイリング
const customStyles: Modal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: 'full',
    height: 'full',
    transform: 'translate(-50%, -50%)',
  },
}

export type CardProps = {
  imageUrl: string
  author: string
  value: number
}

export const Card: FC<CardProps> = ({ imageUrl, author, value }) => {
  const [isModalOpen, setIsOpen] = useState(false)

  // モーダルを開く処理
  const openModal = () => {
    setIsOpen(true)
  }

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="max-w-md md:w-80 lg:w-max mx-4 bg-white mb-10 rounded-lg border border-gray-200 shadow-md">
      <img
        className="object-cover object-center w-96 h-60 rounded-t-lg m-auto"
        src={imageUrl}
        alt=""
        onClick={openModal}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {value} pt
        </h5>
        <p className="mb-3 font-normal text-lg text-gray-700">
          投稿者: {author}さん
        </p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-3/4 md:w-1/2 lg:w-2/3 mx-auto">
          <Image src={imageUrl}></Image>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {value} pt
          </h5>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-lg text-gray-700">
              投稿者: {author}さん
            </p>
            <button
              className="px-4 bg-gray-200 text-gray-500 rounded-full"
              onClick={closeModal}
            >
              ✗
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
