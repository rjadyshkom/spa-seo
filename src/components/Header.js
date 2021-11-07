import React from 'react';
import {NavBar} from './NavBar';
import {content} from '../data/content';

export function Header() {

    return (
        <div className="header">
            <NavBar data={content}/>
        </div>
    )
}