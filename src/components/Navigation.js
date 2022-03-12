import React from 'react'
import { Link } from "react-router-dom";
import Baloon from '../images/baloon-land.jpg'
import Ocean from '../images/blue-ocean.jpg'
import Flowers from '../images/flowers-land.jpg'
import FogMountain from '../images/fog-mountain.jpg'
import MountainLake from '../images/mountain-lake.jpg'
import NightStars from '../images/night-stars.jpg'

const Navigation = () => {
  return (
    <div className='container mt-3 padre'>
        <Link to="/BaloonLand" className='links'>
            <figure>
                <img src={Baloon} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>

        <Link to="/BlueOcean" className='links'>
            <figure>
                <img src={Ocean} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>

        <Link to="/FlowersLand" className='links'>
            <figure>
                <img src={Flowers} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>

        <Link to="/FogMountain" className='links'>
            <figure>
                <img src={FogMountain} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>

        <Link to="/MountainLake" className='links'>
            <figure>
                <img src={MountainLake} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>

        <Link to="/NightStars" className='links'>
            <figure>
                <img src={NightStars} alt='' className='tamaño-img'/>
                <figcaption></figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation