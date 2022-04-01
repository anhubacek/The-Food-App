import React from "react";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Detail.css'

export default function Detail() {

    
    return (
        <div className= 'container'>
            <div className ='nav'>
           <div className='title'> ACA VA EL TITULO </div>
            <div className='links'>aca va crear receta</div>

            </div>
          <div className="searchbar">
              ACA VA LA SEARCHBAR
          </div>
            <div className='pages'>

            ACA VA el detalle de la receta
            </div>
            


        </div>
    )
}