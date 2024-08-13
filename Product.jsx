import React from 'react';

const Product = ({ onClick, children, className }) => {
    return (
        <div>
            <button className={className}onclick={onClick}>
                {children}

            </button>


        </div>
    );
}

export default Product;
