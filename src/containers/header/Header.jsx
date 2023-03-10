import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai_sml from "../../assets/ai_sml.png";


export const Header = () => {
  return (
      <div className='gpt3__header section__padding id=home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistane indulgence unpleasing 
            Not thoughts all exercise blessing indulgence by the way joy alteration
            boisterous the attachment. Party we yours to order allow asked of.
          </p>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder="Your email address"></input>
            <button type='button'>Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img alt="people" src={people}/>
            <p>1,600 requested access a visite in last 24 hours</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
        <img src={ai_sml} alt="ai" />
      </div>
    </div> 
  )
}

export default Header;
