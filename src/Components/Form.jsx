import React from 'react';

const Form = ({ handleChange, data, handleSubmit }) => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    placeholder="Apellido"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.surname}
                />
                <input
                    placeholder="email@email.com"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <button className="btnSubmit">FINALIZAR COMPRA</button>
            </form>
        </div>
    );
};

export default Form;