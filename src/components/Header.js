import logo from '../logo-list.svg';
import {useState, useEffect} from 'react';
import './Header.css';
 
export default function Home() {
  return (
    <>
      <header className='Header-title'>
        <img className='Header-logo' src={logo} alt="" />
        <h1>To do list</h1>
      </header>
    </>
  )
}
 
 