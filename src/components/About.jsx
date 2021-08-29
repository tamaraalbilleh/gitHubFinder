import React from 'react';

function About(props) {
    return (
        <React.Fragment>
            <div style={{ 'padding': '39px' }}>
 
                <h2 style={{ 'fontSize': '40px' }}>
                    About This App
                </h2>
                <p style={{ 'fontSize': '25px' }}>
                    App to search Github users
                </p>
                <p style={{ 'fontSize': '25px' }}>
                    Version: 1.0.0
                </p>
            </div>
        </React.Fragment>
    )
}

export default About