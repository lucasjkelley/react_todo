import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../Images/linkedIn_profilepic.png'
import './About.css'
import { FaReact } from 'react-icons/fa'
import { BsFiletypeSql } from "react-icons/bs";
import { TfiMicrosoft } from "react-icons/tfi";
import { SiReactrouter, SiAxios, SiFirebase, SiDatabricks, SiNpm } from "react-icons/si";

export default function About() {
  return (
<div>
      
      <section className='aboutContainer'>
        <Container className="aboutInfo py-2">
          <Row className='my-auto'>
            <Col lg={5} className='aboutPic p-2'>
              <img src={image} alt="Luke Kelley smiling" />
            </Col>
            <Col lg={7} className='aboutText p-2'>
              <h3 className='py-1 text-center'>Thanks for stopping by!</h3>
                
              <p className='py-1'>
              My name is Luke Kelley. I wrote this app using ReactJS 18 and it communicates with a T-SQL database via an ASP.NET Core 6 Web API. I have implemented npm packages for advanced functionality which includes: routing via React Router Dom, API request handling through Axios, authorization via Google Firebase, and form handling and schema validation using a combination of Formik and Yup. The full source code is available <a href="https://github.com/lucasjkelley/react_todo">here</a> on my GitHub.
              </p>
              <a href="https://reactjs.org/" target='_blank' rel='noreferrer'><FaReact size={50} /></a> &nbsp;&nbsp;&nbsp;
              <a href="https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16" target='_blank' rel='noreferrer'><BsFiletypeSql size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0" target='_blank' rel='noreferrer'><TfiMicrosoft size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://reactrouter.com/en/main" target='_blank' rel='noreferrer'><SiReactrouter size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://axios-http.com/" target='_blank' rel='noreferrer'><SiAxios size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://firebase.google.com/products/auth" target='_blank' rel='noreferrer'><SiFirebase size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://formik.org/docs/overview" target='_blank' rel='noreferrer'><SiDatabricks size={50} /></a>&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/jquense/yup" target='_blank' rel='noreferrer'><SiNpm size={50} /></a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
