import React from 'react';
import './brand.css';
import { google, atlassian, slack, shopify, dropbox } from './import'; 

const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  )
}

export default Brand
