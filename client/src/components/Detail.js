import React , {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import './Detail.css'
import {Link , useParams} from 'react-router-dom'
import { getRecipeById } from './../actions/actions';

export default function Detail() {
    const dispatch = useDispatch();
    const {id} = useParams()

  
    useEffect(()=>{dispatch(getRecipeById(id))}, [dispatch, id])
    let recipe = useSelector(state => state.detail)
    console.log(recipe)
   
    return (
        <div>
        
        <div className= 'container1'>
            <div className ='nav'>
                <Link to='/home' >
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
                <div className='links'>
                    <Link to='/create'>
                    <h5>Create Recipe</h5>
                    </Link>
                </div>
            </div>
           { recipe.length > 0?
            
                <div className="pages1">
                <div className="recipeDetail">
                    <p className="titleDetail">{recipe[0].title}</p>
                    <div className="details"> 
                            <div className="dietas">
                            <label>Diets</label>
                            <p >{(recipe[0].diets? recipe[0].diets: "No diet types.")}</p>
                            </div>
                            <div>
                            <label>Dish Type</label>
                            <p>{recipe[0].dishTypes? recipe[0].dishTypes: "No dish type." }</p>
                            </div>

                            <div>
                            <label>Score</label>
                            <p>{recipe[0].score}</p>
                            </div>
                            
                            <div>
                            <label>Health Score</label>
                            <p>{recipe[0].healthScore}</p>
                            </div>
                            
                        </div>


                    

                    <div className="divresume">
                    
                        <img className="imgDetail" src={recipe[0].image} alt=' '  />
                       
                        <div>
                        <label>Resume</label>
                         <p>{recipe[0].resume.replace(/<([^>]+)>/ig,"")}</p>
                         </div>  
                    </div>
                   
                    <label>Instructions</label>
                    <p className="instructionsp">{recipe[0].instructions}</p>
                    
                    
                    </div>
                </div>
           
            : 
            <div className="pages1">
            <p className="loading">LOADING...</p> 
            </div>}
            </div>
         
            
        </div>
    )
}

// /<([^>]+)>)/ig

// @"\p{Sc}*(\s?\d+[.,]?\d*)\p{Sc}*"  