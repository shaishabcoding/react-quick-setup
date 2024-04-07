import { useRef, useState } from "react";
import "./App.css";
import { LuFolderOpenDot } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

function App() {
  const [projectName, setProjectName] = useState(".");
  const [isUseTailwind, setIsUseTailwind] = useState(true);
  const [isUseRouter, setIsUseRouter] = useState(false);
  const [isUseFirebase, setIsUseFirebase] = useState(false);
  const [isUseDaisy, setIsUseDaisy] = useState(true);
  const [isUseIcons, setIsUseIcons] = useState(false);
  const [isUseToast, setIsUseToast] = useState(false);
  const [isUseHookForm, setIsUseHookForm] = useState(false);
  const [isTailwindClicked, setIsTailwindClicked] = useState(false);
  const tailwindRef = useRef(null);
  const daisyRef = useRef(null);

  function copyToClipboard(id, btnId) {
    const textToCopy = document.getElementById(id).innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });

    document.getElementById(btnId).classList.add("tooltip");
  }

  const packageNameCorrector = (packageName) =>
    packageName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

  return (
    <div className="p-4 lg:p-8">
      <div className=" flex justify-end text-2xl text-gray-700 hover:text-gray-400 transition">
        <a
          href="https://github.com/shaishabcoding/react-setup"
          target="_blank"
          className="hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-4xl lg:text-6xl font-mono text-sky-400 lg:mx-20 my-6 lg:my-12 text-center select-none">
        React Quick Setup
      </p>

      {/* input box */}
      <p className="mt-10 font-mono font-bold text-sky-400 select-none">
        Enter Your Project Name
      </p>
      <div className="lg:mx-[450px] mt-5 flex">
        <form
          onChange={(e) =>
            setProjectName(packageNameCorrector(e.target.value.trim()) || ".")
          }
          className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-10 w-full"
        >
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full"
              placeholder="Project Name"
              name="name"
            />
            <LuFolderOpenDot />
          </label>
        </form>
      </div>

      {/* command */}
      <div className="my-10 select-none">
        <form>
          <ul className="grid w-full gap-6 grid-cols-2 md:grid-cols-6">
            <li>
              <input
                onClick={() => setIsUseRouter(!isUseRouter)}
                type="checkbox"
                id="router-option"
                checked={isUseRouter}
                className="hidden peer"
              ></input>
              <label
                htmlFor="router-option"
                className="inline-flex items-center justify-between w-full p-5 text-pink-500 bg-white border-2 border-pink-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-pink-700 peer-checked:border-black peer-checked:saturate-0 peer-checked:bg-gray-100 peer-checked:text-black hover:text-pink-600 dark:peer-checked:text-pink-300 hover:bg-pink-50 dark:text-pink-400 dark:bg-pink-800 dark:hover:bg-pink-700"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    className="w-7 h-7"
                    src="react-router.svg"
                    alt="router"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    React-router
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                ref={tailwindRef}
                onClick={() => {
                  setIsUseTailwind(!isUseTailwind);
                  setIsTailwindClicked(!isUseTailwind);
                  if (isUseTailwind) {
                    setIsUseTailwind(false);
                    daisyRef.current.checked = false;
                    setIsTailwindClicked(false);
                    setIsUseDaisy(false);
                  }
                }}
                type="checkbox"
                id="tailwind-option"
                checked={isUseTailwind}
                className="hidden peer"
              ></input>
              <label
                htmlFor="tailwind-option"
                className="inline-flex items-center justify-between w-full p-5 text-sky-500 bg-white border-2 border-sky-200 rounded-lg cursor-pointer dark:hover:text-sky-300 dark:border-sky-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-sky-600 dark:peer-checked:text-sky-300 hover:bg-sky-50 dark:text-sky-400 dark:bg-sky-800 dark:hover:bg-sky-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    className="w-7 h-7"
                    src="tailwind.svg"
                    alt="tailwind-css"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    Tailwind
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                ref={daisyRef}
                onClick={() => {
                  setIsUseDaisy(!isUseDaisy);
                  if (!isUseDaisy) {
                    setIsUseTailwind(true);
                    tailwindRef.current.checked = true;
                  } else {
                    if (!isTailwindClicked) {
                      setIsUseTailwind(false);
                      tailwindRef.current.checked = false;
                    }
                  }
                }}
                type="checkbox"
                id="react-option"
                checked={isUseDaisy}
                className="hidden peer"
              ></input>
              <label
                htmlFor="react-option"
                className="inline-flex items-center justify-between w-full p-5 text-amber-500 bg-white border-2 border-amber-200 rounded-lg cursor-pointer dark:hover:text-amber-300 dark:border-amber-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-amber-600 dark:peer-checked:text-amber-300 hover:bg-amber-50 dark:text-amber-400 dark:bg-amber-800 dark:hover:bg-amber-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img className="w-7 h-7" src="daisy.png" alt="" />
                  <div className="w-full text-lg font-semibold font-mono">
                    DaisyUi
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                onClick={() => setIsUseFirebase(!isUseFirebase)}
                type="checkbox"
                id="firebase-option"
                checked={isUseFirebase}
                className="hidden peer"
              ></input>
              <label
                htmlFor="firebase-option"
                className="inline-flex items-center justify-between w-full p-5 text-orange-500 bg-white border-2 border-orange-200 rounded-lg cursor-pointer dark:hover:text-orange-300 dark:border-orange-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-orange-600 dark:peer-checked:text-orange-300 hover:bg-orange-50 dark:text-orange-400 dark:bg-orange-800 dark:hover:bg-orange-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    className="h-7 w-7"
                    src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"
                    alt="firebase"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    Firebase
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                onClick={() => setIsUseToast(!isUseToast)}
                type="checkbox"
                id="toast-option"
                checked={isUseToast}
                className="hidden peer"
              ></input>
              <label
                htmlFor="toast-option"
                className="inline-flex items-center justify-between w-full p-5 text-teal-500 bg-white border-2 border-teal-200 rounded-lg cursor-pointer dark:hover:text-teal-300 dark:border-teal-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-teal-600 dark:peer-checked:text-teal-300 hover:bg-teal-50 dark:text-teal-400 dark:bg-teal-800 dark:hover:bg-teal-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/arcade/64/toast.png"
                    alt="toast"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    Toastify
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                onClick={() => setIsUseIcons(!isUseIcons)}
                type="checkbox"
                id="reactIcons-option"
                checked={isUseIcons}
                className="hidden peer"
              ></input>
              <label
                htmlFor="reactIcons-option"
                className="inline-flex items-center justify-between w-full p-5 text-pink-500 bg-white border-2 border-pink-200 rounded-lg cursor-pointer dark:hover:text-pink-300 dark:border-pink-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-pink-600 dark:peer-checked:text-pink-300 hover:bg-pink-50 dark:text-pink-400 dark:bg-pink-800 dark:hover:bg-pink-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    width="28"
                    height="28"
                    src="react-icons.png"
                    alt="react-icons"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    React-icon
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                onClick={() => setIsUseHookForm(!isUseHookForm)}
                type="checkbox"
                id="hookForm-option"
                value=""
                className="hidden peer"
              ></input>
              <label
                htmlFor="hookForm-option"
                className="inline-flex items-center justify-between w-full p-5 text-green-500 bg-white border-2 border-green-200 rounded-lg cursor-pointer dark:hover:text-green-300 dark:border-green-700 peer-checked:border-black peer-checked:bg-gray-100 peer-checked:text-black hover:text-green-600 dark:peer-checked:text-green-300 hover:bg-green-50 dark:text-green-400 dark:bg-green-800 dark:hover:bg-green-700 peer-checked:saturate-0"
              >
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img
                    width="28"
                    height="28"
                    src="react-hook-form.png"
                    alt="react-icons"
                  />
                  <div className="w-full text-lg font-semibold font-mono">
                    Hook Form
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </form>
      </div>
      <div className="my-10">
        <h1 className="font-bold text-2xl text-center w-full font-mono text-sky-400">
          NPM Packages
        </h1>
        <p className="font-mono font-medium mb-10">
          Elevate Your React Projects with Essential NPM Packages
        </p>
        <div className="lg:mx-[300px] border border-zinc-700  bg-slate-800 rounded-xl shadow-lg">
          <div className="relative flex text-slate-400 text-xs leading-6 bg-slate-800 rounded-xl shadow-lg ">
            <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
              command
            </div>
            <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
              <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
            </div>
            <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
              <div className="relative flex -mr-2">
                <button
                  type="button"
                  className="text-slate-500 hover:text-slate-400 "
                  data-tip="copied"
                  id="command-btn"
                  onClick={() => copyToClipboard("command", "command-btn")}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="w-8 h-8"
                  >
                    <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                    <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className=" text-left p-5 text-zinc-300" id="command">
            <pre data-prefix="1" className="">
              <code className="text-balance">
                npm create vite@latest {projectName} -- --template react{" "}
              </code>
            </pre>
            {projectName && projectName !== "." && (
              <pre data-prefix="2" className="">
                <code className="text-balance">cd {projectName}</code>
              </pre>
            )}
            {isUseTailwind && (
              <>
                <pre data-prefix="3" className="">
                  <code className="text-balance">
                    npm i -D tailwindcss postcss autoprefixer
                  </code>
                </pre>
                <pre data-prefix="4" className="">
                  <code className="text-balance">npx tailwindcss init -p</code>
                </pre>
              </>
            )}
            {isUseDaisy && (
              <pre data-prefix="5" className="">
                <code className="text-balance">npm i -D daisyui@latest</code>
              </pre>
            )}
            {isUseRouter && (
              <pre data-prefix="6" className="">
                <code className="text-balance">
                  npm i react-router-dom localforage match-sorter sort-by
                </code>
              </pre>
            )}
            {isUseFirebase && (
              <pre data-prefix="7" className="">
                <code className="text-balance">npm i firebase</code>
              </pre>
            )}
            {isUseIcons && (
              <pre data-prefix="8" className="">
                <code className="text-balance">npm i react-icons</code>
              </pre>
            )}
            {isUseToast && (
              <pre data-prefix="9" className="">
                <code className="text-balance">npm i react-toastify</code>
              </pre>
            )}
            {isUseHookForm && (
              <pre data-prefix="9" className="">
                <code className="text-balance">npm i react-hook-form</code>
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* tailwind.config.js */}
      {isUseTailwind && (
        <>
          <div className="lg:mx-[300px]">
            <h1 className="font-bold text-2xl text-center w-full font-mono text-sky-400">
              Tailwind Configuration
            </h1>
            <p className="font-mono font-medium">
              Fine-tune Your Tailwind Setup for React Projects
            </p>
            <div className="text-left relative my-10 z-10 lg:-ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-xs leading-6">
                <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  tailwind.config.js
                </div>
                <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                  <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>
                <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                  <div className="relative flex -mr-2">
                    <button
                      type="button"
                      className="text-slate-500 hover:text-slate-400 "
                      data-tip="copied"
                      id="tailwind-config-btn"
                      onClick={() =>
                        copyToClipboard(
                          "tailwind-config",
                          "tailwind-config-btn"
                        )
                      }
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-8 h-8"
                      >
                        <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                        <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                  <code
                    className="flex-none min-w-full p-5"
                    id="tailwind-config"
                  >
                    <span className="token block">
                      <span className="token plain"></span>
                      <span className="token keyword module">export</span>
                      <span className="token plain"> </span>
                      <span className="token keyword module">default</span>
                      <span className="token plain"> </span>
                      <span className="token punctuation">&#123;</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                      <span className="token plain"> </span>
                      <span className="token literal-property property">
                        content
                      </span>
                      <span className="token operator">:</span>
                      <span className="token plain"> </span>
                      <span className="token punctuation">[</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token string">
                        &quot;./index.html&quot;
                      </span>
                      <span className="token punctuation">,</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token string">
                        &quot;./src/**/*.&#123;js,ts,jsx,tsx&#125;&quot;
                      </span>
                      <span className="token punctuation">,</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                      <span className="token plain"> </span>
                      <span className="token punctuation">]</span>
                      <span className="token punctuation">,</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block">
                      <span className="token plain"> </span>
                      <span className="token literal-property property">
                        theme
                      </span>
                      <span className="token operator">:</span>
                      <span className="token plain"> </span>
                      <span className="token punctuation">&#123;</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block">
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token plain"> </span>
                      <span className="token literal-property property">
                        extend
                      </span>
                      <span className="token operator">:</span>
                      <span className="token plain"> </span>
                      <span className="token punctuation">&#123;</span>
                      <span className="token punctuation">&#125;</span>
                      <span className="token punctuation">,</span>
                      <span className="token plain"></span>
                    </span>
                    <span className="token block">
                      <span className="token plain"> </span>
                      <span className="token punctuation">&#125;</span>
                      <span className="token punctuation">,</span>
                      <span className="token plain"></span>
                    </span>
                    {isUseDaisy && (
                      <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15] text-sky-300">
                        <span className="token plain"> </span>
                        <span className="token literal-property property">
                          plugins
                        </span>
                        <span className="token operator">:</span>
                        <span className="token plain"> </span>
                        <span className="token punctuation text-slate-500">
                          [
                        </span>
                        <span className="token string text-sky-300">
                          require(&quot;daisyui&quot;)
                        </span>
                        <span className="token punctuation text-slate-500">
                          ]
                        </span>
                        <span className="token punctuation">,</span>
                        <span className="token plain"></span>
                      </span>
                    )}
                    <span className="token block">
                      <span className="token plain"></span>
                      <span className="token punctuation">&#125;</span>
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* index.css */}
          <div className="lg:mx-[300px] my-10">
            <div className="my-10">
              <h1 className="font-bold text-2xl text-center w-full font-mono text-sky-400">
                Integrate Tailwind Directives
              </h1>
              <p className="font-mono font-medium">
                Add the directives for each of Tailwind’s layers.
              </p>
            </div>
            <div className="relative z-10 lg:-ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-xs leading-6">
                <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  src/index.css
                </div>
                <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                  <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>
                <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                  <div className="relative flex -mr-2">
                    <button
                      type="button"
                      id="index-css-btn"
                      data-tip="copied"
                      className="text-slate-500 hover:text-slate-400"
                      onClick={() =>
                        copyToClipboard("index-css", "index-css-btn")
                      }
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-8 h-8"
                      >
                        <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                        <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                  <code
                    className="flex-none min-w-full p-5 text-left"
                    id="index-css"
                  >
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> base
                      <span className="token punctuation">;</span>
                    </span>
                    <br />
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> components
                      <span className="token punctuation">;</span>
                    </span>
                    <br />
                    <span className="token atrule">
                      <span className="token rule">@tailwind</span> utilities
                      <span className="token punctuation">;</span>
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </>
      )}
      {/* main.jsx */}
      {isUseRouter && (
        <>
          {" "}
          <div className="my-10">
            <h1 className="font-bold text-2xl text-center w-full font-mono text-sky-400">
              React Router Integration
            </h1>
            <p className="font-mono font-medium">
              Seamlessly Incorporate React Router for Dynamic Page Navigation
            </p>
          </div>
          <div
            data-code-block=""
            data-filename="src/main.jsx"
            data-line-numbers="true"
            data-lang="jsx"
            className="text-left bg-slate-800 rounded-xl lg:mx-[300px]  text-zinc-300"
          >
            <div className="relative flex text-slate-400 text-xs leading-6 w-full">
              <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                src/main.jsx
              </div>
              <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
              </div>
              <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                <div className="relative flex -mr-2">
                  <button
                    type="button"
                    id="main-jsx-btn"
                    data-tip="copied"
                    className="text-slate-500 hover:text-slate-400"
                    onClick={() => copyToClipboard("main-jsx", "main-jsx-btn")}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="w-8 h-8"
                    >
                      <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                      <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <pre
              data-filename="src/main.jsx"
              data-line-numbers="true"
              data-lang="jsx"
              className="p-5"
            >
              <code className="break-words text-balance" id="main-jsx">
                <span
                  className="codeblock-line text-balance"
                  data-line-number="1"
                >
                  <span>import</span> <span>*</span> <span>as</span>{" "}
                  <span>React</span> <span>from</span> &quot;<span>react</span>
                  &quot;;
                </span>{" "}
                <br />
                <span className="codeblock-line" data-line-number="2">
                  <span>import</span> <span>*</span> <span>as</span>{" "}
                  <span>ReactDOM</span> <span>from</span> &quot;
                  <span>react-dom/client</span>&quot;;
                </span>
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="3"
                >
                  <span>import</span> &#123;
                </span>
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="4"
                >
                  {" "}
                  <span>createBrowserRouter</span>,
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="5"
                >
                  {" "}
                  <span>RouterProvider</span>,
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="6"
                >
                  &#125; <span>from</span> &quot;<span>react-router-dom</span>
                  &quot;;
                </span>{" "}
                <br />
                <span className="codeblock-line" data-line-number="7">
                  <span>import</span> &quot;<span>./index.css</span>&quot;;
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-line-number="8"
                ></span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="9"
                >
                  <span>const</span> <span>router</span> <span>=</span>{" "}
                  <span>createBrowserRouter</span>([
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="10"
                >
                  {" "}
                  &#123;
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="11"
                >
                  {" "}
                  path: &quot;<span>/</span>&quot;,
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="12"
                >
                  {" "}
                  element: &lt;<span>div</span>
                  &gt;Hello world!&lt;/<span>div</span>
                  &gt;,
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="13"
                >
                  {" "}
                  &#125;,
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="14"
                >
                  ]);
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-line-number="15"
                ></span>{" "}
                <br />
                <span className="codeblock-line   " data-line-number="16">
                  <span>ReactDOM</span>.<span>createRoot</span>(
                  <span>document</span>.<span>getElementById</span>(&quot;
                  <span>root</span>&quot;)).
                  <span>render</span>(
                </span>{" "}
                <br />
                <span className="codeblock-line" data-line-number="17">
                  {" "}
                  &lt;<span>React.StrictMode</span>&gt;
                </span>{" "}
                <br />
                <span
                  className="codeblock-line"
                  data-highlight="true"
                  data-line-number="18"
                >
                  {" "}
                  &lt;<span>RouterProvider</span> <span>router</span>
                  <span>=</span>
                  <span>&#123;</span>
                  <span>router</span>
                  <span>&#125;</span> /&gt;
                </span>{" "}
                <br />
                <span className="codeblock-line" data-line-number="19">
                  {" "}
                  &lt;/<span>React.StrictMode</span>
                  &gt;
                </span>{" "}
                <br />
                <span className="codeblock-line" data-line-number="20">
                  );
                </span>{" "}
                <br />
              </code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
