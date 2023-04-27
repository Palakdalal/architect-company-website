import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About Us </h2>
          <p>
          At ArchiVision Design Group, we are committed to creating innovative and sustainable designs that reflect our clients' 
          vision and values. Our team of experienced architects and designers 
          bring together creativity, technology, and attention to detail to create exceptional projects that exceed our clients' expectations.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>Email : ArchiVision@gmail.com </span>
          <span>Website : www.archihelp.com </span>
        </div>
        <div className={classes.col}>
          <h2>Address</h2>
          {/* <span></span> */}
          <span>123,blue street,Phagwara,Punjab,India </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer