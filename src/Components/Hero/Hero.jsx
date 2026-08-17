import React from 'react'
import './Hero.css'
import 'remixicon/fonts/remixicon.css'
const Hero = () => {
  return (
    <>
        <section>
          <div class='herotext1'>
            <h1>
              Digitize
            </h1>
            <div class='video'>
              <div class='play'>
                  <i class="ri-play-large-fill"></i>
              </div>
            </div>
          </div>
          <div class='herotext2'>
            <h1>
              Ideas
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo at possimus esse cupiditate velit obcaecati.
            </p>
          </div>

          <div class='buttonss'>
            <div className='button1'>
              <i class="ri-vip-crown-line"></i>
              <span>  2026 Best Product</span>
            </div>
            <div className='button1'>
                <i class="ri-global-line"></i>
                <span>  World Class Agency</span>
            </div>
          </div>
        </section>
        <div class='image'>
          
        </div>
    </>
  )
}

export default Hero