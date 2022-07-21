import React from 'react';

const Form = ({ handleChange, data, handleSubmit }) => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nombre y apellido"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    placeholder="email@email.com"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <button className="btnSubmit">Finalizar compra</button>
            </form>
        </div>
    );
};

export default Form;