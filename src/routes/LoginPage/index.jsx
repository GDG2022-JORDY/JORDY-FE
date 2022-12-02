import { useState } from 'react'
import axios from 'axios'

export default function LoginPage() {
  const [authMode, setAuthMode] = useState('signin')

  const changeAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
  }

  async function LoginAction(value) {
    const res = await axios.post('http://ssh.sirin-dev.com/', {
      query: `queury login {
      email : "sdfds", password : "password"
      }
    }`,
      operationName: 'loginUser',
    })
    const loginToken = res.data.data.loginUser === null ? null : res.data.data.loginUser.token
    const errorMessage = res.data.errors === undefined ? null : res.data.errors[0].message
    const userInfo = {
      loginToken,
      errorMessage,
    }
    return userInfo
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('test')
  }

  return (
    <div className='Auth-form-container'>
      <form className='Auth-form' onSubmit={handleSubmit}>
        <div className='Auth-form-content'>
          <h3 className='Auth-form-title'>Sign In</h3>
          <div className='text-center'>
            Not registered yet?{' '}
            {/* <span className='link-primary' onClick={changeAuthMode}>
              Sign Up
            </span> */}
          </div>
          <div className='form-group mt-3'>
            <div>Email address</div>
            <input type='email' className='form-control mt-1' placeholder='Enter email' />
          </div>
          <div className='form-group mt-3'>
            <div>Password</div>
            <input type='password' className='form-control mt-1' placeholder='Enter password' />
          </div>
          <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
