import React, {useState, useEffect} from "react";
import './Home.css'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getTypes } from "../actions/actions";
import './RecipeForm.css'


export default function RecipeForm() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [input, setInput] = useState({
        title: "",
        resume: "",
        score: "",
        healthScore: "", 
        image: "", 
        instructions: "", 
        dishTypes: "", 
        diet: [], 
        id: "",
    })

    useEffect(()=> {dispatch(getTypes)}, [dispatch]);

    return (
        <div className= 'container'>
            <div className ='nav'>
                <Link to='/home'>
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
                {/* <div className='links'>
                <Link to='/create'>
                <h5>Create Recipe</h5>
                </Link>
                </div> */}
            </div>
            {/* <div className="searchbar">
                <SearchBar/>
            </div> */}
            <div className='pages'>
                <h5>Create your own recipe!</h5>
                <div className="form">
                <form>
                    <div className="input">
                    <label>Title</label>
                    <input
                        type="text"
                        value=""
                        name="name"
                        className="titleInput"
                        
                    />
                    </div>
                    <div className="input">
                     <label>Resume</label>
                    <input
                        type="text"
                        value=""
                        className="resumeInput"
                      
                    />
                    </div>
                    <div className="input">
                    <label>Instructions</label>
                    <input
                        type="text"
                        value=""
                        className="instructionsInput"
                    />
                    </div>
                    <div className="input">
                    <label>Image URL</label>
                    <input
                        type="text"
                        value=""
                        className="imageInput"
                    />
                    </div>
                    <div className="input">
                    <div className="scoresAndDiets">
                            <div className="scores">
                                <div className="input">
                                <label>Score</label>
                                <input
                                    type="number"
                                    value=""
                                    className="scoreInput"
                                />
                                </div>
                                <div className="input">
                                <label>Health</label>
                                <input
                                    type="number"
                                    value=""
                                    className="scoreInput"
                                />
                                </div>

                                </div>
                            <div className="diets">

                            </div>

                    </div>
                    <button>Create</button>
                    </div>
                </form>
                </div>
            </div>
            


        </div>
    )
}