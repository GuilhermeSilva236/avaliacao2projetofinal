import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    const [cdpet, setCdpet] = useState([])

    useEffect(() => {
        setCdpet(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('cdpet')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('cdpet', JSON.stringify(itens))
            setCdpet(itens)
        }
    }
    return (
        <>
            <Pagina titulo="CadastroPet">

                <Link href="cdpet/form" className='mb-2 btn btn-primary'>
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Matricula</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Logadouro</th>
                            <th>Complemento</th>
                            <th>Número</th>
                            <th>Bairro</th>


                        </tr>
                    </thead>
                    <tbody>
                        {cdpet.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cdpet/' + i}>
                                        <BsPencilFill title="Alterar" className='text-primary' />
                                    </Link>
                                    {' '}
                                    <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.matricula}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.logadouro}</td>
                                <td>{item.complemento}</td>
                                <td>{item.numero}</td>
                                <td>{item.bairro}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default index