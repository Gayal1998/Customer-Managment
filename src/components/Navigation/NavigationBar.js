import React from 'react'
import PersonIcon from '@mui/icons-material/Person';




import "./NavigationBar.css"

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
        
            <span className="logo">Home </span>
            <span className="logo">About</span>
            <span className="logo">Contact</span>
        </div>  
        <div className="navBarCenter">
        
         <div className='header'>
        <span className="logo-header">Customer Management System</span>
        </div>

        </div>
   
        

         
        <div className="navBarRight">
          
        
        <div className="navBarPro">
            
                
            <span className ="">Profile</span>
            <div className='icon'><PersonIcon   /> </div>
            </div>
            
        </div>   
        
    </div>
  )
}
