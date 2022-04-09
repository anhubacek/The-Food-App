import React , {useEffect} from "react";
import { useDispatch} from "react-redux";
import './Home.css'
import {Link} from 'react-router-dom'
import { getRecipeById } from './../actions/actions';

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getRecipeById(props.match.params.id))}, [dispatch])
    const recipe = (state => state.detail)

    return (
        <div>
        { recipe ? 
        <div className= 'container'>
            <div className ='nav'>
                <Link to='/home'>
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
                <div className='links'>
                    <Link to='/create'>
                    <h5>Create Recipe</h5>
                    </Link>
                </div>
            </div>
           
            <div >
                <div >
                    <p className="title">{recipe[0].title}</p>
                        <div >
                        <img src={recipe[0].image} alt=' '  />
                        </div>
                    <h6>{recipe[0].diets? recipe[0].diets : recipe[0].diet.map(e => e.name)}</h6>
                </div>
           
            </div>
            

            </div>
            : <p>LOADING...</p>
            }
        </div>
    )
}