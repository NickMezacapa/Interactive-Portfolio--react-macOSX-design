import React from 'react';
import FinderIcon  from './Assets/finder-icon.png';
import Cal from '../Cal/Cal';
import SettingsIcon from './Assets/settings-icon.png';
import MessagesIcon from './Assets/messages.png';
import ChromeIcon from './Assets/chrome.png';
import DictionaryIcon from './Assets/dict-icon.png';
import NotesIcon from './Assets/notes.png';
import CalculatorIcon from './Assets/calc-icon.png';
import MusicIcon from './Assets/apple-music.png';
import TrashFullIcon from './Assets/trash-full.png';
import FolderIcon from './Assets/folder-icon.png';
import CodeIcon from './Assets/code-icon.png';
import TerminalIcon from './Assets/terminal-icon.png';
import GithubIcon from './Assets/github-icon.png';
import './Dock.css';

const Dock = () => {
  return (
    <div className="Dock-Wrapper">
        <div className="Dock-Container">
            <div className="Dock-AppContainer">
                <div className="Dock-AppContainer_icon">
                    <img src={FinderIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon Dock-AppContainer_icon--siri">
                    {/* <img src={SiriIcon} alt="app icon" /> */}
                </div>
                <div className="Dock-AppContainer_icon Dock-AppContainer_icon-scaleDown Dock-AppContainer_icon--empty">
                    
                    <Cal id='Dock-AppContainer_calendar' />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={SettingsIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={MessagesIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={ChromeIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={CodeIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={GithubIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={NotesIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon Dock-AppContainer_icon-scaleDown">
                    <img src={DictionaryIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={CalculatorIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={MusicIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon--separator">
                </div>
                <div className="Dock-AppContainer_icon">
                    <img src={TerminalIcon} alt="app icon" />
                </div>
                <div className="Dock-AppContainer_icon Dock-AppContainer_icon-scaleDown">
                    <img src={TrashFullIcon} alt="app icon" />
                </div>
            </div>
        </div>
        <div className="FolderIcon">
            <img src={FolderIcon} alt="folder icon" />
            UntitledFolder
        </div>
    </div>
  )
}

export default Dock