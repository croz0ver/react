import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'


ReactDOM.render(
        <Family lastName='Balzan'>
            <Member name='Jose'/>
            <Member name='Joao'/>
        </Family>
        , document.getElementById("app"));
