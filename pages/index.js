import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Components
import HeadStaff from '../components/HeadStaff'

// Image
import loginImage from "../public/login-form.gif"
import Logo from "../public/logo-6625ff24.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadStaff title="Login" />

      <div className='container'>
        <div className='row flex align-items-center pt-4 pb-5'>
          <div className='col-lg-6 col-sm-6 col-xs-6'>
            <Image src={Logo} height="100%" width="100" alt='' />
          </div>
          <div className='col-lg-6 col-sm-6 col-xs-6 text-end'>
            <h6>New User <span id="signup"><Link href="/signup">Sign Up</Link></span></h6>
          </div>
        </div>
      </div>

      <div className='container' id='login_form'>
        <div className='row flex align-items-center'>
          <div className='col-lg-5 col-md-4'>
            <Image src={loginImage} height="0" width="0" alt=''></Image>
          </div>
          <div className='col-lg-7 col-md-8'>
            <h2>Welcome Back!</h2>
            <p>Login Continue</p>

            <input type='text' placeholder='Enter Registration ID' className='form-control pt-3 pb-3' />
            
            <input type='password' placeholder='Enter Password' className='form-control pt-3 pb-3 mt-3' />

            <div className='row mt-4 flex align-items-center'>
              <div className='col-6'>
                <button className='btn login_btn btn-lg'>Login</button>
              </div>
              <div className='col-6 text-end'>
                <p className='mb-0' id='forgetPassword'><Link href="/forgetpassword">Forget Password?</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </>
  )
}
