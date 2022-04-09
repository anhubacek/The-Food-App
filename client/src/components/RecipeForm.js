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
    
    })

    useEffect(()=> {dispatch(getTypes)}, [dispatch]);

    return (
        <div className= 'container'>
            <div className ='nav'>
                <Link to='/home'>
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
            </div>
            <div className='pages'>
                <h5>Create your own recipe!</h5>
                <div className="form">
                <form>
                    <div className="input">
                    <label>Title</label>
                    <input
                        type="text"
                        value={input.title}
                        name="title"
                        className="titleInput"
                        
                    />
                    </div>
                    <div className="input">
                     <label>Resume</label>
                    <input
                        type="text"
                        value={input.resume}
                        name="resume"
                        className="resumeInput"
                      
                    />
                    </div>
                    <div className="input">
                    <label>Instructions</label>
                    <input
                        type="text"
                        value={input.instructions}
                        name="instructions"
                        className="instructionsInput"
                    />
                    </div>
                    <div className="input">
                    <label>Image URL</label>
                    <input
                        type="text"
                        value={input.image}
                        name="image"
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
                                    name="score"
                                    className="scoreInput"
                                    min="1"
                                    max="100"
                                />
                                </div>
                                <div className="input">
                                <label>Health</label>
                                <input
                                    type="number"
                                    value=""
                                    name="heathScore"
                                    className="scoreInput"
                                    min="1"
                                    max="100"
                                />
                                </div>

                                </div>

                            <div className="diets">

                            <label>Diets</label>

                            <div className="dietInput">
                                <span>Dairy Free</span>
                                <input
                                    type="checkbox"
                                    value="dairy free"
                                    name="dairy free"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Lacto Ovo Vegetarian</span>
                                <input
                                    type="checkbox"
                                    value="lacto ovo vegetarian"
                                    name="lacto ovo vegetarian"
                                    className="checkboxInput"
                                />
                            </div>
                        
                            <div className="dietInput">
                                <span>Vegan</span>
                                <input
                                    type="checkbox"
                                    value="vegan"
                                    name="vegan"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Gluten Free</span>
                                <input
                                    type="checkbox"
                                    value="gluten free"
                                    name="gluten free"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Pescatarian</span>
                                <input
                                    type="checkbox"
                                    value="pescatarian"
                                    name="pescatarian"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Paleolithic</span>
                                <input
                                    type="checkbox"
                                    value="paleolithic"
                                    name="paleolithic"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Primal</span>
                                <input
                                    type="checkbox"
                                    value="primal"
                                    name="primal"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Fodmap Friendly</span>
                                <input
                                    type="checkbox"
                                    value="fodmap friendly"
                                    name="fodmap friendly"
                                    className="checkboxInput"
                                />
                            </div>

                            <div className="dietInput">
                                <span>Whole 30</span>
                                <input
                                    type="checkbox"
                                    value="whole 30"
                                    name="whole 30"
                                    className="checkboxInput"
                                />
                            </div>

               
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