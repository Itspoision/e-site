import React from 'react';
import './seller-home.css';

const people = [
  {
    price: '1000',
    quantity: '2',
    imageUrl:
      'https://about.hm.com/content/dam/hmabout/gallery/fashion/2025/hm-studio-pre-spring-capsule/1-campaign-images/2031-PR-Portrait-A4-sRGB-300ppi-241115-.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg',
  },
  // More...
]

export default function SellerHome() {
  return (
    <div className="seller-home">
      <h1 className="title1">Hi! Mr. Alok welcome</h1>
      <div className="container">
        <div className="intro">
          <h2 className="title">
            Product Name
          </h2>
          <p className="description">
           lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <ul role="list" className="people-list">
          {people.map((person) => (
            <li key={person.name}>
              <div className="person">
                <img alt="" src={person.imageUrl} className="person-image" />
                <div>
                  <h3 className="person-name">Price: {person.price}</h3>
                  <p className="person-role">Quantity: {person.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="upload-img">
        <h2>Original Product </h2>
        <input type="file" id="file" />
        <label for="file">Upload Image</label>

        <h2>Product To Be Deliver </h2>
        <input type="file" id="file" />
        <label for="file">Upload Image</label>
      </div>

      <div className="btn">
        <button className="btn1">Submit</button>
        <button className="btn2">Cancel</button>
      </div>
    </div>
  )
}
