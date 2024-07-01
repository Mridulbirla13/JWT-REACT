// GitHubButton.js
import React from 'react';
import "./button.css"
const GitHubButton = () => {
    const buttonStyle = {
        // border: 'none',
        // borderRadius: '30px',

    };

    const handleGitHubLogin = () => {
        window.location.href = "http://localhost:5000/auth/github";
    };
    return (
        <div className="github-button">
            {/* <button onClick={handleGitHubLogin}>Login with GitHub</button> */}
            <button className="gsi-material-button" style={buttonStyle} onClick={handleGitHubLogin}>
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                    <div className="git-material-button-icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block' }}>
                            <path fill="#000000" d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.112.823-.261.823-.577v-2.26c-3.338.723-4.042-1.618-4.042-1.618-.546-1.387-1.334-1.758-1.334-1.758-1.091-.745.083-.73.083-.73 1.205.084 1.838 1.24 1.838 1.24 1.07 1.833 2.807 1.303 3.492.998.108-.776.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.383 1.236-3.22-.123-.302-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.958-.267 1.98-.4 3-.405 1.02.005 2.042.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.243 2.874.12 3.176.77.837 1.234 1.91 1.234 3.22 0 4.61-2.805 5.627-5.476 5.922.43.373.817 1.104.817 2.225v3.31c0 .318.218.693.825.575 4.76-1.588 8.194-6.086 8.194-11.388 0-6.627-5.373-12-12-12z" />

                        </svg>
                    </div>
                    <span className="gsi-material-button-contents">Sign in with Github</span>
                    <span style={{ display: 'none' }}>Sign in with Github</span>
                </div>
            </button>
        </div>
    );
};
export default GitHubButton;
