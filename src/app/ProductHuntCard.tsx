// pages/ProductHuntCard.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function ProductHuntCard() {
  return (
    <div className="flex flex-1 !flex-col">
      <div className="my-5 flex flex-row justify-between">
        <ol className="flex list-none flex-row flex-wrap gap-2">
          <li className="flex flex-row items-center gap-2">
            <Link href="/">
              <Link className="text-14 font-normal text-dark-gray hover:text-blue opacity-70" href="">Home</Link>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="mt-0.5 h-2 fill-light-gray">
              <path fillRule="evenodd" d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z"></path>
            </svg>
            <Link href="/products/videodubber-fast-video-translator">
              <Link className="text-14 font-normal text-dark-gray hover:text-blue opacity-70" href="">Product</Link>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" className="mt-0.5 h-2 fill-light-gray">
              <path fillRule="evenodd" d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z"></path>
            </svg>
            <span className="text-14 font-normal text-dark-gray pointer-events-none">VideoDubber - Fast Video Translator</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row">
          <Image 
            src="" 
            alt="VideoDubber - Fast Video Translator" 
            width={72} 
            height={72} 
            loading="lazy" 
            className="styles_mediaThumbnail__NCzNO"
          />
          <div className="flex flex-1 flex-row items-start justify-end"></div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="text-24 font-bold text-dark-gray">
              VideoDubber - Fast Video Translator
              <Link href="#" className="styles_toggle__Mwy5j" aria-label="Post actions">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                  <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z"></path>
                </svg>
              </Link>
            </h1>
            <h2 className="text-24 font-light text-light-gray">Translate videos in your own voice, globalize in a click!</h2>
          </div>
          <div className="flex flex-row items-end gap-3">
            <button type="button" className="styles_reset__0clCw styles_button__BmLM4 styles_secondary__zB2Yb styles_button__ZONBo">
              <div className="flex flex-row items-center justify-center">
                <div className="text-14 font-semibold text-dark-gray">Visit</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                  <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z"></path>
                </svg>
              </div>
            </button>
            <button type="button" className="styles_reset__0clCw styles_large__O8Tv3 styles_upvoted__2Wi33 styles_voteButton__GUsHI">
              <div className="flex flex-row items-center justify-center">
                <div className="styles_icon__kJG98 styles_voted__kh04x styles_animate__Lrdww styles_white__sa9Bu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8">
                    <path fillRule="evenodd" d="M9 8H0l4.5-8z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8">
                    <path fillRule="evenodd" d="M9 8H0l4.5-8z"></path>
                  </svg>
                </div>
                <div className="text-14 font-semibold text-dark-gray uppercase">Upvoted</div>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="styles_icon__HlV9y">
                  <path fill="#F64900" d="M15.333 3.333h-1.596c.16-.317.25-.666.263-1.022A2.4 2.4 0 0 0 11.555 0 4.14 4.14 0 0 0 8 2.345 4.12 4.12 0 0 0 4.467 0H4.39A2.396 2.396 0 0 0 2 2.311v.044c.013.34.1.674.253.978H.667A.667.667 0 0 0 0 4v2c0 .368.298.667.667.667h14.666A.667.667 0 0 0 16 6V4a.667.667 0 0 0-.667-.667m-3.757-2a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066A1.067 1.067 0 0 1 11.576 1.333M4.424 1.333c.591.654 1.313 1.067 2.113 1.067s1.522-.413 2.113-1.067a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066c0-.354.092-.692.252-.998a.665.665 0 0 0-.163-.133C6.246 2.14 5.638 2 5 2c-1.118 0-2.098.659-2.447 1.611a.632.632 0 0 0-.115.146A.754.754 0 0 0 2 4a.667.667 0 0 0 .666.667h14.666A.667.667 0 0 0 18 4a.757.757 0 0 0-.233-.614A1.612 1.612 0 0 0 15.333 3.333Z"></path>
                </svg>
                <span className="text-14 font-normal text-dark-gray">7</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="styles_icon__HlV9y">
                <path fill="#F64900" d="M15.333 3.333h-1.596c.16-.317.25-.666.263-1.022A2.4 2.4 0 0 0 11.555 0 4.14 4.14 0 0 0 8 2.345 4.12 4.12 0 0 0 4.467 0H4.39A2.396 2.396 0 0 0 2 2.311v.044c.013.34.1.674.253.978H.667A.667.667 0 0 0 0 4v2c0 .368.298.667.667.667h14.666A.667.667 0 0 0 16 6V4a.667.667 0 0 0-.667-.667m-3.757-2a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066A1.067 1.067 0 0 1 11.576 1.333M4.424 1.333c.591.654 1.313 1.067 2.113 1.067s1.522-.413 2.113-1.067a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066c0-.354.092-.692.252-.998a.665.665 0 0 0-.163-.133C6.246 2.14 5.638 2 5 2c-1.118 0-2.098.659-2.447 1.611a.632.632 0 0 0-.115.146A.754.754 0 0 0 2 4a.667.667 0 0 0 .666.667h14.666A.667.667 0 0 0 18 4a.757.757 0 0 0-.233-.614A1.612 1.612 0 0 0 15.333 3.333Z"></path>
              </svg>
              <span className="text-14 font-normal text-dark-gray">0</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="styles_icon__HlV9y">
                <path fill="#F64900" d="M15.333 3.333h-1.596c.16-.317.25-.666.263-1.022A2.4 2.4 0 0 0 11.555 0 4.14 4.14 0 0 0 8 2.345 4.12 4.12 0 0 0 4.467 0H4.39A2.396 2.396 0 0 0 2 2.311v.044c.013.34.1.674.253.978H.667A.667.667 0 0 0 0 4v2c0 .368.298.667.667.667h14.666A.667.667 0 0 0 16 6V4a.667.667 0 0 0-.667-.667m-3.757-2a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066A1.067 1.067 0 0 1 11.576 1.333M4.424 1.333c.591.654 1.313 1.067 2.113 1.067s1.522-.413 2.113-1.067a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066c0-.354.092-.692.252-.998a.665.665 0 0 0-.163-.133C6.246 2.14 5.638 2 5 2c-1.118 0-2.098.659-2.447 1.611a.632.632 0 0 0-.115.146A.754.754 0 0 0 2 4a.667.667 0 0 0 .666.667h14.666A.667.667 0 0 0 18 4a.757.757 0 0 0-.233-.614A1.612 1.612 0 0 0 15.333 3.333Z"></path>
              </svg>
              <span className="text-14 font-normal text-dark-gray">0</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="styles_icon__HlV9y">
                <path fill="#F64900" d="M15.333 3.333h-1.596c.16-.317.25-.666.263-1.022A2.4 2.4 0 0 0 11.555 0 4.14 4.14 0 0 0 8 2.345 4.12 4.12 0 0 0 4.467 0H4.39A2.396 2.396 0 0 0 2 2.311v.044c.013.34.1.674.253.978H.667A.667.667 0 0 0 0 4v2c0 .368.298.667.667.667h14.666A.667.667 0 0 0 16 6V4a.667.667 0 0 0-.667-.667m-3.757-2a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066A1.067 1.067 0 0 1 11.576 1.333M4.424 1.333c.591.654 1.313 1.067 2.113 1.067s1.522-.413 2.113-1.067a1.067 1.067 0 0 1 1.066 1.066 1.067 1.067 0 0 1-1.066 1.066 1.067 1.067 0 0 1-1.067-1.066c0-.354.092-.692.252-.998a.665.665 0 0 0-.163-.133C6.246 2.14 5.638 2 5 2c-1.118 0-2.098.659-2.447 1.611a.632.632 0 0 0-.115.146A.754.754 0 0 0 2 4a.667.667 0 0 0 .666.667h14.666A.667.667 0 0 0 18 4a.757.757 0 0 0-.233-.614A1.612 1.612 0 0 0 15.333 3.333Z"></path>
              </svg>
              <span className="text-14 font-normal text-dark-gray">0</span>
            </div>
          </div>
        </div>
      </div>
    {/* </section>
  </main>
</div> */}
  </div>
  ) }