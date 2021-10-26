import type { NextPage } from 'next'
import Head from 'next/head'
import { Badge } from '../src/components/badge/index'
import { TextBox } from '../src/components/form/textbox/index'

const Invitation: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 bg-green-100">
        <div className="grid justify-center">
          <form className="bg-white shadow-md rounded w-full px-8 pt-6 pb-8 mb-4">
            <div className="grid">
              <div className="col-span-2 flex justify-center items-center mb-8">
                <input type="radio" id="invite1" name="invitation" />
                <label
                  className="block text-gray-700 text-3xl font-bold mb-2 ml-4"
                  for="invite1"
                >
                  ご出席
                </label>
              </div>
              <div className="col-span-2 flex justify-center items-center mb-8">
                <input type="radio" id="invite2" name="invitation" />
                <label
                  className="block text-gray-700 text-3xl font-bold mb-2 ml-4"
                  for="invite2"
                >
                  ご欠席
                </label>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">ゲスト</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 flex justify-center items-center mb-4">
                <input
                  className="mr-4"
                  type="radio"
                  id="shinro"
                  name="guestType"
                  value="shinro"
                />
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 mr-4"
                  for="shinro"
                >
                  新郎側
                </label>
                <input
                  className="mr-4"
                  type="radio"
                  id="shinpu"
                  name="guestType"
                  value="shinpu"
                />
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 mr-4"
                  for="shinpu"
                >
                  新婦側
                </label>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">ご芳名</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 mb-4 flex flex-row">
                <div className="mr-2 w-1/2">
                  <TextBox
                    type="text"
                    placeholder="姓"
                    required={true}
                    width="w-full"
                  ></TextBox>
                </div>
                <div className="w-1/2">
                  <TextBox
                    type="text"
                    placeholder="名"
                    required={true}
                    width="w-full"
                  ></TextBox>
                </div>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">ふりがな</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 mb-4 flex flex-row">
                <div className="mr-2 w-1/2">
                  <TextBox
                    type="text"
                    placeholder="せい"
                    required={true}
                  ></TextBox>
                </div>
                <div className="w-1/2">
                  <TextBox
                    type="text"
                    placeholder="めい"
                    required={true}
                  ></TextBox>
                </div>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">電話番号</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 mb-4">
                <TextBox
                  type="tel"
                  placeholder="09011112222"
                  required={true}
                ></TextBox>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">郵便番号</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 mb-4 flex flex-row">
                <div className="mr-2 w-1/2">
                  <TextBox
                    type="number"
                    placeholder="180"
                    required={true}
                  ></TextBox>
                </div>
                <div className="mr-2 w-1/2">
                  <TextBox
                    type="number"
                    placeholder="0013"
                    required={true}
                  ></TextBox>
                </div>
              </div>
              <div className="col-span-4 mb-2">
                <span className="mr-2">住所</span>
                <Badge text="必須"></Badge>
              </div>
              <div className="col-span-4 mb-4">
                <TextBox
                  type="text"
                  placeholder="東京都武蔵野市..."
                  required={true}
                ></TextBox>
              </div>
              <div className="col-span-4 mb-2">メッセージ</div>
              <div className="col-span-4 mb-4">
                <textarea
                  className="rounded-lg w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div className="col-span-4 mb-2">アレルギー</div>
              <div className="col-span-4 mb-4 flex-col items-center">
                <div className="w-full mb-4">
                  お食事や飲料に関してアレルギー等による制限がありましたら詳細をお書きください
                </div>
                <div className="w-full">
                  <TextBox type="text" placeholder="" required={true}></TextBox>
                </div>
              </div>
              <div className="col-span-4">
                <button className="bg-green-600 hover:bg-green-700 w-full font-semibold text-white py-2 px-4 rounded-md">
                  登録する
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Invitation
