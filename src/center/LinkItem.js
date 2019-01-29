import React from 'react';

/*const Image => ({url, img, alt}) => (
    <a href={url} className="cms-link cms-link--image js-self-help">
        <img src={img} alt={alt} height="36px" />
    </a>
);

const Title => ({url, name}) => (
    <a href={url} 
        className="cms-link cms-link--text js-self-help">
        {name} 
    </a>
);*/

let LinkItem = (props) => (
    <div className="column colspan-1 text-center push push-1">
        <a href={props.url} 
            className="cms-link cms-link--image js-self-help">
        <img src={props.img} 
            alt={props.alt} height="36px" />
        </a>
        <br></br>
        <a href={props.url} 
            className="cms-link cms-link--text js-self-help">
            {props.name} 
        </a>
    </div>
);

export default LinkItem;
