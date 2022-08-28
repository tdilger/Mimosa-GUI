import { Component } from 'solid-js';
import './navigation.scss'

const Nav: Component = ({ location }) => {
    return (
        <div class="nav flex relative items-center content-center h-32 w-full bg-slate-500 px-4">
            <ul>
                <li><a href="">Nav</a></li>
                <li><a href="">Item</a></li>
            </ul>
            <div class="absolute right-0 mx-20">
               Settings 
            </div>
        </div>
    )
}

export default Nav;