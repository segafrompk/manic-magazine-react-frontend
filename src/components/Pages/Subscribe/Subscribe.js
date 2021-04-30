import React from 'react';
import { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    function handleChange(event) {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
    };

    return (
        <section className='manic-subscribe'>
            <div className='manic-subscribe-dark-overlay'>
                <div className='subscribe-box'>
                    <div className='subscribe-box-title'>SUBSCRIBE</div>
                    <div className='subscribe-box-title'>RIGHT NOW</div>
                    <div className='subscribe-box-text'>
                        BE THE FIRST TO KNOW ABOUT THE NEWEST ISSUE AND DOWNLOAD
                        IT IMMEDIATELY!
                    </div>
                    <form
                        className='subscribe-box-form'
                        onSubmit={handleSubmit}
                    >
                        <input
                            className='subscribe-box-button'
                            type='submit'
                            value='Subscribe'
                        />
                        <input
                            className='subscribe-box-input'
                            type='text'
                            placeholder='jon.doe@mail.com'
                            value={email}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
