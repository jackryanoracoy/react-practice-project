import React, { useEffect, useState } from 'react';
import Button from '../site-button/index';

import './index.scss';

function About() {

  useEffect(() => {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const items = await data.json();
    setItems(items);
  }

  return (
    <main className="about">
      <div className="container">
        <header className="about-header">
          <h2>ABOUT</h2>
        </header>

        <section className="section">
          {items.map(item => (
            <p className="mb-40 mb-sm-20" key={item}>{item}</p>
          ))}

          <div className="flex gap-10">
            <div className="flex-item-12 flex-item-sm">
              <Button buttonClass="is-danger is-block" buttonText="Back To Home Page" />
            </div>

            <div className="flex-item-12 flex-item-sm">
              <Button buttonClass="is-primary is-block" buttonPath="/about/" buttonText="Visit About Page" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
