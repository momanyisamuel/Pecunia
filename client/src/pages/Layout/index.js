import React from 'react'

function Layout({...props}) {
  return (
    <div>
        <div className='main '>
            <div className="notification text-center py-4 bg-gray-600 text-white">
                <p>Your notification</p>
            </div>
            <div className="logo my-6 text-center m-0 mx-auto w-10/12">
                <p>CDF</p>
            </div>
            <div className="navigation py-4 border-t border-b border-gray-300">
                <div className="m-0 mx-auto w-10/12">
                    <ul className='flex w-full'>
                        <li className='w-full'><a href="">Home</a></li>
                        <li className='w-full'><a href="">Dashboard</a></li>
                        <li className='w-full'><a href=""></a>Sign In</li>
                        <li className='w-full'><a href=""></a>Sign Up</li>
                    </ul>
                </div>
            </div>
            {props.children}
            <footer>

            </footer>
        </div>
    </div>
  )
}

export default Layout