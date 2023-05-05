import React from 'react'
import './service.css'
import {BsCheckLg} from 'react-icons/bs'

const service = () => {
  return (
    <section id='service'>
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
          </ul>
        </article>

        {/* END Web dev */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, nemo!</p>
            </li>
          </ul>
        </article>

        {/* END OF content */}


      </div>
        
    </section>
  )
}

export default service