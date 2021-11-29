import type { NextPage } from 'next'

const TailwindTest: NextPage = () => {
  return (
    <div className="container mx-auto bg-green-100">
      <div className="grid grid-cols-3 gap-4 bg-blue-100">
        <div className="p-1 bg-red-200">1</div>
        <div className="p-1 bg-red-200">2</div>
        <div className="p-1 bg-red-200">3</div>
        <div className="p-1 bg-red-200">4</div>
        <div className="p-1 bg-red-200">5</div>
        <div className="p-1 bg-red-200">6</div>
        <div className="p-1 bg-red-200">7</div>
        <div className="p-1 bg-red-200">8</div>
        <div className="p-1 bg-red-200">9</div>
        <div className="p-1 bg-red-200">10</div>
        <div className="p-1 bg-red-200">11</div>
        <div className="p-1 bg-red-200">12</div>
      </div>
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input
          class="form-input mt-1 block w-full"
          placeholder="Jane Doe"
        ></input>
      </label>

      <div class="antialiased text-gray-900 px-6">
        <div class="max-w-xl mx-auto py-12 md:max-w-4xl">
          <h2 class="text-2xl font-bold">Reset styles</h2>
          <p class="mt-2 text-lg text-gray-500">
            These are form elements this plugin styles by default.
          </p>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Input (text)</span>
                <input
                  type="text"
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (email)</span>
                <input
                  type="email"
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (email, multiple)</span>
                <input
                  type="email"
                  multiple
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (password)</span>
                <input
                  type="password"
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (date)</span>
                <input type="date" class="form-input mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (datetime-local)</span>
                <input
                  type="datetime-local"
                  class="form-input mt-1 block w-full"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (month)</span>
                <input type="month" class="form-input mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (number)</span>
                <input type="number" class="form-input mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (search)</span>
                <input type="search" class="form-input mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (time)</span>
                <input type="time" class="form-input mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (week)</span>
                <input type="week" class="form-input mt-1 block w-full" />
              </label>
            </div>
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Input (tel)</span>
                <input
                  type="tel"
                  multiple
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (url)</span>
                <input
                  type="url"
                  multiple
                  class="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Select</span>
                <select class="form-select block w-full mt-1">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Select (multiple)</span>
                <select class="form-multiselect block w-full mt-1" multiple="">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Textarea</span>
                <textarea
                  class="form-textarea mt-1 block w-full h-24"
                  rows="3"
                  placeholder="Enter some long form content."
                ></textarea>
              </label>
              <div class="block">
                <span class="text-gray-700">Checkboxes</span>
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input class="form-checkbox" type="checkbox" checked />
                      <span class="ml-2">Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input class="form-checkbox" type="checkbox" />
                      <span class="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input class="form-checkbox" type="checkbox" />
                      <span class="ml-2">Option 3</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="block">
                <span class="text-gray-700">Radio Buttons</span>
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        class="form-radio"
                        type="radio"
                        checked
                        name="radio-direct"
                        value="1"
                      />
                      <span class="ml-2">Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        class="form-radio"
                        type="radio"
                        name="radio-direct"
                        value="2"
                      />
                      <span class="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        class="form-radio"
                        type="radio"
                        name="radio-direct"
                        value="3"
                      />
                      <span class="ml-2">Option 3</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto py-12">
          <h2 class="text-2xl font-bold">Untouched</h2>
          <p class="mt-2 text-lg text-gray-500">
            These are form elements we don't handle (yet?), but we use this to
            make sure we haven't accidentally styled them by mistake.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-6 items-start">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Input (range)</span>
                <input type="range" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (color)</span>
                <input type="color" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (file)</span>
                <input type="file" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">Input (file, multiple)</span>
                <input type="file" multiple class="mt-1 block w-full" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="py-12">
        <h2 class="text-2xl font-bold">Simple</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Full name</span>
              <input
                type="text"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder=""
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Email address</span>
              <input
                type="email"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">When is your event?</span>
              <input
                type="date"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              />
            </label>
            <label class="block">
              <span class="text-gray-700">What type of event is it?</span>
              <select
                class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
              >
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Additional details</span>
              <textarea
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                rows="3"
              ></textarea>
            </label>
            <div class="block">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                      checked
                    />
                    <span class="ml-2">Email me news and special offers</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailwindTest
