import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);

    const onChangeNome = (e) => {
        setNome(e.target.value)
    }

    const onChangeTarefa = (e) => {
        setTarefa(e.target.value)
    }

    const guardarNome = () => {
        localStorage.setItem('usuário', nome)
        setNome("")
    }

    const acessarNome = () => {
        const usuario = localStorage.getItem('usuário')
        alert(usuario)
    }

    // const guardarContador = () => {
    //     localStorage.setItem('contador', nome)
    //     setNome("")
    // }

    // const acessarContador = () => {
    //     const usuario = localStorage.getItem('usuário')
    //     alert(usuario)
    // }

    const adicionarTarefa = () => {
        const novaLista = [...listaTarefa, tarefa]
        setListaTarefa(novaLista)
        setTarefa("")
    }

    const guardarTarefa = () => {
        localStorage.setItem('tarefa', JSON.stringify(listaTarefa))
    }

    const acessarTarefa = () => {
        setListaTarefa(JSON.parse(localStorage.getItem('tarefa')))
    }

    const guardarContador = () => {
        localStorage.setItem('contador', contador)
    }

    useEffect(() => {
        acessarTarefa();
        // guardarContador();
        document.title = localStorage.getItem('contador')
    }, [contador])

    const soma = () => {
        const soma = contador + 1
        setContador(soma)
        guardarContador()
    }

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input
                    name="nome"
                    id="nome"
                    onChange={onChangeNome}
                    value={nome}
                    />
            </label>

            <div>
                <button onClick={guardarNome}>
                    Guardar Dados</button>
                <button onClick={acessarNome} 
                >Acessar Dados</button>
            </div>
            <br />
            
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input
                    name="tarefa"
                    id="tarefa" 
                    onChange={onChangeTarefa}
                    value={tarefa}
                    />
            </label>

            <button
                onClick={adicionarTarefa}
                type="button">
                adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>

            <div>
                <button onClick={guardarTarefa}>Guardar tarefa</button>
                <button onClick={acessarTarefa}>Acessar tarefa</button>
            </div>

            <div>
                <h1>Contador</h1>
                <p>{contador}</p>
                <button onClick={soma}>Somar</button>
            </div>
        </Form>
    );
}