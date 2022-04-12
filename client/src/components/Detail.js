import React , {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import './Detail.css'
import {Link , useParams} from 'react-router-dom'
import { getRecipeById, cleanDetail, deleteRecipe } from './../actions/actions';
import { useNavigate } from 'react-router-dom';

export default function Detail() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const history = useNavigate()

   //apenas se monta el componente traigo el estado que contiene el detalle
    useEffect(()=>{dispatch(getRecipeById(id))}, [dispatch, id])
    let recipe = useSelector(state => state.detail)
    console.log(recipe)

    // function handleClick(e){
    //     e.preventDefault();  //limpio el estado del detalle al volver a home
    //     dispatch(cleanDetail())
    // }
   
    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteRecipe(recipe[0].id));
        console.log(recipe[0].id)
        alert("Recipe deleted");
        history.push('/home');
        
    }

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
                <div className="deleteDiv">
                {recipe[0].created && <button 
                className="deleteButton"
                onClick={handleDelete}>Delete Recipe</button> }
                </div>
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
                    
                        <img className="imgDetail" src={recipe[0].image? recipe[0].image : "https://media.istockphoto.com/photos/blank-recipe-book-on-wooden-table-picture-id481482102?b=1&k=20&m=481482102&s=170667a&w=0&h=68rhfYQV0RU3JLXrF6T1T7tWQQ4nzb24fMZ-KxBy8Hk="} 
                        alt=' '  />
                       
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
            <div className="pages1loading">
            <p className="loading">LOADING...</p> 
            </div>}
            </div>
         
            
        </div>
    )
}













// /<([^>]+)>)/ig

// @"\p{Sc}*(\s?\d+[.,]?\d*)\p{Sc}*"  