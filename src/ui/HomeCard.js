import React from 'react';
import cadastro3 from '../img/cadastro3.png'

const HomeCard = (props) => (
    <div className="col- col-">
        <div className="card" style={{width: '14rem', marginRight: '50px'}}>
            <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '10px', width: '80px'}} src={cadastro3} alt="Cadastro de Pedidos" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary" onClick={props.action}>Clique Aqui...</a>
                </div>
</div>
        </div>
        );
        
export default HomeCard;