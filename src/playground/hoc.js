import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent { ...props }/>
            ) : (
                <p>Need to authenticate first!</p>
            )}
        </div>
    );
};

const AuthenticatedInfo = withAuthentication(Info);
ReactDom.render(<AuthenticatedInfo isAuthenticated={true} info="this is he info" />, document.getElementById('app'));