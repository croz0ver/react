import React from 'react'

//tipo funcao
/*
export default function(){
    return <h1>Primeiro Componente Tesste </h1>
}
*/
//arrow function
export default (props) => (
    <h1>{props.value}</h1>
)
