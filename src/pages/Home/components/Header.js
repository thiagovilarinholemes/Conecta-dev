import React from 'react';

function Header() {
    return (
        <header className='header'>
            <div className='toolbar'>

                <div className=''>
                    <a href='/'>Conecta Dev</a>
                </div>

                <div className=''>
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img1</span>
                </div>
            </div>
        </header>
    );
}

export default Header;