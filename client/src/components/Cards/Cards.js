import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

function Cards({ cats }) {
    return (
        <div className='pet-cards-container'>
            {cats && cats.map((cat) => {
                return <Card
                    key={cat.id}
                    name={cat.name}
                    phone={cat.phone}
                    email={cat.email}
                    image={cat.image}
                    favoured={cat.favoured}
                />
            })}
        </div>
    )
}

export default Cards