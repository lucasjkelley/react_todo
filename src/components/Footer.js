import React from 'react'


export default function Footer() {
  return (
    <footer className="text-center text-white bg-dark p-2 fixed-bottom">
        <strong>&copy; {new Date().getFullYear()} All Rights Reserved</strong>
    </footer>
  )
}