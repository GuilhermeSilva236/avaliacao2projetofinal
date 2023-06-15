import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import cdpetValidator from '@/validator/cdpetvalidator'

export const form = () => {
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const cdpet = JSON.parse(window.localStorage.getItem('cdpet')) || []
        cdpet.push(dados)
        window.localStorage.setItem('cdpet', JSON.stringify(cdpet))
        push('/cdpet')
    }
    return (
        <>
            <Pagina titulo='FormulárioPet'>
                <Form>
                    <div style={{ minHeight: '0vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        {['Success'].map((variant) => (
                            <div key={variant} className="mb-2">
                                <Card
                                    bg={variant.toLowerCase()}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '40rem' }}
                                >
                                    <Card.Body>
                                        <Card.Img variant="top" src="/img/banner1.png" />
                                        <Card.Title>Cadastre o Seu Pet</Card.Title>
                                        <Button variant="light">Cadastre o Seu Pet</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <Form.Group className="mb-3" controlId='nome'>
                        <Form.Label >Nome: </Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cdpetValidator.nome)} />
                        {
                            errors.nome &&
                            <p className='mt-1 text-danger'>{errors.nome.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='cpf'>
                        <Form.Label >cpf: </Form.Label>
                        <Form.Control isInvalid={errors.cpf} type="text" {...register('cpf', cdpetValidator.cpf)} />
                        {
                            errors.cpf &&
                            <p className='mt-1 text-danger'>{errors.cpf.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='matricula'>
                        <Form.Label >matricula: </Form.Label>
                        <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', cdpetValidator.matricula)} />
                        {
                            errors.matricula &&
                            <p className='mt-1 text-danger'>{errors.matricula.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='email'>
                        <Form.Label >email: </Form.Label>
                        <Form.Control isInvalid={errors.email} type="text" {...register('email', cdpetValidator.email)} />
                        {
                            errors.email &&
                            <p className='mt-1 text-danger'>{errors.email.message}</p>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='telefone'>
                        <Form.Label >telefone: </Form.Label>
                        <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', cdpetValidator.telefone)} />
                        {
                            errors.telefone &&
                            <p className='mt-1 text-danger'>{errors.telefone.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='cep'>
                        <Form.Label >cep: </Form.Label>
                        <Form.Control isInvalid={errors.cep} type="text" {...register('cep', cdpetValidator.cep)} />
                        {
                            errors.cep &&
                            <p className='mt-1 text-danger'>{errors.cep.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='logradouro'>
                        <Form.Label >logradouro: </Form.Label>
                        <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', cdpetValidator.logradouro)} />
                        {
                            errors.logradouro &&
                            <p className='mt-1 text-danger'>{errors.logradouro.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='complemento'>
                        <Form.Label >complemento: </Form.Label>
                        <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', cdpetValidator.complemento)} />
                        {
                            errors.complemento &&
                            <p className='mt-1 text-danger'>{errors.complemento.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='numero'>
                        <Form.Label >numero: </Form.Label>
                        <Form.Control isInvalid={errors.numero} type="text" {...register('numero', cdpetValidator.numero)} />
                        {
                            errors.numero &&
                            <p className='mt-1 text-danger'>{errors.numero.message}</p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='bairro'>
                        <Form.Label >bairro: </Form.Label>
                        <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', cdpetValidator.bairro)} />
                        {
                            errors.bairro &&
                            <p className='mt-1 text-danger'>{errors.bairro.message}</p>
                        }
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <AiOutlineCheck className='me-2' />
                            Salvar
                        </Button>

                        <Link className=' ms-2 btn btn-danger' href='/cdpet'>
                            <IoMdArrowBack className='me-2' />
                            voltar
                        </Link>
                    </div>
                </Form>
            </Pagina>
        </>
    )
}

export default form