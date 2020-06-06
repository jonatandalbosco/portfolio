import React from 'react';
import { FiLogIn, FiCode, FiArrowDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import djonaImg from '../../assets/djona.jpg';
import reactlogoImg from '../../assets/react-logo.png';
export default function Logon() {
  return (
  
    <div className="logon-container">
      <section className="form">
      <img className="img-logo" src={reactlogoImg} alt="ReactJS"  width={300} height={300}/>

          <form>

            <h1 className="h1-title">Digite seus dados</h1>

            <input placeholder="Digite seu nome" />
            <input placeholder="Digite seu e-mail" />
            <input placeholder="Digite seu telefone" />
            <input placeholder="Digite seu endereço" />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
              <FiLogIn  size={16} color="#Fff" />
              Não tenho cadastro
            </Link>
          </form>
      </section>

      <div className="container">
        <div className="row">
        <h1 className="h1-sobre">Sobre mim</h1>
    
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
     
        <div className="title-e-icons">
          <h1 className="h1-code">Time to Coffe</h1> 
          <FiArrowDown  size={100} color="#Fff" />
        </div>
        <h5 className="h5-sobre">accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
            amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
            baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
            clip clipPath clipPathUnits clipRule colorInterpolation
            colorInterpolationFilters colorProfile colorRendering contentScriptType
            contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
            </h5>
            </div>
            <div className="container">
            <div className="row">
            <Card style={{ width: '18rem' }}>
  <img src={djonaImg} alt="Be The Hero" width={288} height={200} />
  <Card.Body>
    <Card.Title>React JS</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <img src={djonaImg} alt="Be The Hero" width={288} height={200} />
  <Card.Body>
    <Card.Title>React JS</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></div></div>

      </div>
           
      
      
    </div>
    
  );
}