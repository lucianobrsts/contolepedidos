import React from 'react';
import status from '../img/status.png';

const HomeCard = (props) => (
    <div className="col- col-" style={{ paddingTop: '10px' }}>
        <div className="card" style={{ width: '14rem', marginRight: '50px' }}>
            <img className="card-img-top rounded mx-auto d-block" style={{ paddingTop: '10px', width: '60px' }}
                src={status} alt={props.alt} />
            <div className="card-body">
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary" onClick={props.action}>{props.title}</button>
            </div>
        </div>
    </div>
);

export default HomeCard;