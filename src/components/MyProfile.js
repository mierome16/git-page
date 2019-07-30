import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from  'react-router-dom'
import '../styles/myprofile.css'
import moment from 'moment'


export default function MyProfile() {
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [avatar, setAvatar] = useState('')
    const [repo, setRepo] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/mierome16').then(resp => {
            console.log(resp.data)
            setUsername(resp.data.login)
            setLocation(resp.data.location)
            setAvatar(resp.data.avatar_url)
        })
        axios.get('https://api.github.com/users/mierome16/repos').then(resp => {
            console.log(resp.data)
            setRepo(resp.data)

        })
    }, [])

    return (
        <div className="gitpage">
            <header>

            </header>
            <div className="allinfo">
                <aside>
                    <img src={avatar}></img>
                    <h2>{username}</h2>
                    <button>Edit Profile</button>
                    <h3>{location}</h3>
                    <h3>hi I'm Malina</h3>
                </aside>
                <main>
                    <header className="overview">
                        <ul>
                            <li>Overview</li>
                            <li>Repositories</li>
                            <li>Projects</li>
                            <li>Stars</li>
                            <li>Followers</li>
                            <li>Following</li>
                        </ul>
                    </header>
                    <ul className="repolist">
                        {repo.map(item => {
                            return (
                           <li>
                           <h3>{item.name}</h3>
                           <p>{item.description}</p>
                           <div className="languages">
                           <p>{item.language} </p> <p>{moment(item.updated_at).fromNow()}</p> </div>
                           </li> 
                            )
                        })}
                    </ul>
                </main>
            </div>
        </div>
    )
}

