import React from 'react';
import DayTime from '../DT/DT';
import { AiFillApple, AiOutlineSearch, AiOutlineWifi } from 'react-icons/ai';
import { BsBatteryFull, BsFillVolumeUpFill } from 'react-icons/bs';
import { FiBluetooth } from 'react-icons/fi';
import SiriIcon from './siri.png';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav-Wrapper">
        <div className="Nav-Container">

            <section className="Nav-FlexContainer_left">
                <ul className="Nav-FlexContainer_left_ul">
                    <li className="Nav-FlexContainer_left_ul_li">
                        <AiFillApple id='Nav-FlexContainer_appleLogo' size={22} />
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li" id='Nav-FlexContainer_name'>
                        Nick Mezacapa
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li">
                        About
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li">
                        Resume
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li">
                        Projects
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li">
                        Contact
                    </li>
                    <li className="Nav-FlexContainer_left_ul_li">
                        Help
                    </li>
                </ul>
            </section>


            <section className="Nav-FlexContainer_right">
                <ul className="Nav-FlexContainer_right_ul">
                    <div className="Nav-FlexContainer_icons">
                        <BsFillVolumeUpFill size={20} />
                        <FiBluetooth size={20} />
                        <BsBatteryFull size={20} />
                        <AiOutlineWifi size={20} />
                        <AiOutlineSearch size={20} />
                    </div>
                    <div className="Nav-FlexContainer_siri">
                        <img src={SiriIcon} alt="Siri Icon" id='Nav-FlexContainer_siri_icon' />
                    </div>
                    <div className="Nav-FlexContainer_date">
                        <DayTime />
                    </div>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default Nav