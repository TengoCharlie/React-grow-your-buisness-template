import React from 'react';

const Footer = props => {
    const year = new Date();
    return (
        <>

            <footer className="w-100 bg-light text-center">
                <p>&copy; {year.getFullYear()} Harsh Tenguriya. All Right Reserved | Terms and Condition </p>
            </footer>
        </>
    );
};



export default Footer;