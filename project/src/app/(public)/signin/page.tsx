'use client'
import React, { useState } from 'react'

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>Sign In</p>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({
                            ...formData,
                            username: e.target.value
                        })
                    }} />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }}
                />
                <input type='submit' value="Log In" />
            </form>
        </div>
    )
}

export default SignIn