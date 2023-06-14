import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Pagina from '@/components/Pagina'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Pagina>
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    {['Success'].map((variant) => (
      <div key={variant} className="mb-2">
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '40rem' }}
        >
          <Card.Body>
            <Card.Img variant="top" src="img/banner1.png" />
            <Card.Title>Cadastre o Seu Pet</Card.Title>
            <Button variant="light">Cadastre o Seu Pet</Button>
          </Card.Body>
        </Card>
      </div>
    ))}

    {['Success'].map((variant) => (
      <div key={variant} className="mb-2">
        <Card
          bg={variant.toLowerCase()}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '40rem' }}
        >
          <Card.Body>
            <Card.Img variant="top" src="img/banner1.png" />
            <Card.Title>Cadastre o Seu Pet</Card.Title>
            <Button variant="light">Cadastre o Seu Pet</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</Pagina>
    </>
  )
}
