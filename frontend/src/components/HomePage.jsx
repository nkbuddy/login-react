import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">We will contact you Soon for authentication</h1>
            <Link to="/login">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}