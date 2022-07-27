import React from 'react';

const Card = ({email, id, name}) =>{
    return(
        <div className='bg-light-green hover-light-silver dib br4 pa1 ma3 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card