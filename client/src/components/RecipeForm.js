import React, {useState, useEffect} from "react";
import './Home.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getTypes } from "../actions/actions";
import './RecipeForm.css'


export default function RecipeForm() {
    const dispatch = useDispatch();
    useEffect(()=> {dispatch(getTypes())}, []);

    const [input, setInput] = useState({
        title: "",
        resume: "",
        score: "",
        healthScore: "", 
        image: "", 
        instructions: "", 
        dishTypes: "", 
        diets: []
    
    });

    const [errors, setErrors] = useState({});

    function handleChange(e){
        setInput({
            ...input, //traigo el estado anterior y seteo cada estado
            [e.target.name]: e.target.value //con el valor de value

        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    function handleCheck(e){
        console.log(input)
        if (e.target.checked){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            });
        } 
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        if(!input.title || !input.resume || !input.instructions
            || !input.score || !input.healthScore) {
            alert("Please complete the fields.")
        }
        else {
            dispatch(postRecipe(input))
        alert("Recipe created!")
        setInput({
            title: "",
            resume: "",
            score: "",
            healthScore: "", 
            image: "", 
            instructions: "", 
            dishTypes: "", 
            diets: [], 
            id:"",
        })
        }
        
    
    }

    function handleCleanFields() {
        setInput({
            title: "",
            resume: "",
            score: "",
            healthScore: "", 
            image: "", 
            instructions: "", 
            dishTypes: "", 
            diets: [], 
            id:"",
        })
    }

    function validate(input) {
        let errors = {};
        if(!input.title) {
            errors.title = "Please complete the recipe title.";
        }
        if (!input.resume) {
            errors.resume = "Please complete de recipe resume.";
        }
        if (!input.instructions) {
            errors.instructions = "Please complete the steps.";
        }
       
        if(!input.score || input.score > 100 || input.score < 1){
            errors.score = "Score should be a number from 1 to 100."
        }
        if(!input.healthScore || input.healthScore > 100 || input.healthScore < 1){
            errors.healthScore = "Health Score should be a number from 1 to 100."
        }
        return errors;
    } 

    return (
        <div className= 'container'>
            <div className ='nav'>
                <Link to='/home'>
                <div className='title'> <h2>The Food App</h2></div>
                </Link>
            </div>
            <div className='pages'>
                <h5 onClick={handleCleanFields}>Create your own recipe!</h5>
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                    <label>Title</label>
                    <input
                        type="text"
                        value={input.title}
                        name="title"
                        className="titleInput"
                        onChange={handleChange}
                        
                    />
                    {errors.title && (
                        <p className="error">{errors.title}</p>
                    )}

                    </div>
                    <div className="input">
                     <label>Resume</label>
                    <textarea
                        type="text"
                        value={input.resume}
                        name="resume"
                        className="resumeInput"
                        onChange={handleChange}
                      
                    />
                    {errors.resume && (
                        <p className="error">{errors.resume}</p>
                    )}
                    </div>
                    <div className="input">
                    <label>Instructions</label>
                    <textarea
                        type="text"
                        value={input.instructions}
                        name="instructions"
                        className="instructionsInput"
                        onChange={handleChange}
                    />
                    {errors.instructions && (
                        <p className="error">{errors.instructions}</p>
                    )}

                    </div>
                    <div className="input">
                    <label>Image URL</label>
                    <input
                        type="text"
                        value={input.image}
                        name="image"
                        className="imageInput"
                        onChange={handleChange}
                    />
                    </div>
                    <div className="input">
                    <div className="scoresAndDiets">
                            <div className="scores">
                                <div className="input">
                                <label>Score</label>
                                <input
                                    type="number"
                                    value={input.score}
                                    name="score"
                                    className="scoreInput"
                                    min="1"
                                    max="100"
                                    onChange={handleChange}
                                />
                                {errors.score && (
                        <p className="error">{errors.score}</p>
                    )}
                                </div>
                                <div className="input">
                                <label>Health</label>
                                <input
                                    type="number"
                                    value={input.healthScore}
                                    name="healthScore"
                                    className="scoreInput"
                                    min="1"
                                    max="100"
                                    onChange={handleChange}
                                />
                                {errors.healthScore && (
                        <p className="error">{errors.healthScore}</p>
                    )}
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
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Lacto Ovo Vegetarian</span>
                                <input
                                    type="checkbox"
                                    value="lacto ovo vegetarian"
                                    name="lacto ovo vegetarian"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>
                        
                            <div className="dietInput">
                                <span>Vegan</span>
                                <input
                                    type="checkbox"
                                    value="vegan"
                                    name="vegan"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Gluten Free</span>
                                <input
                                    type="checkbox"
                                    value="gluten free"
                                    name="gluten free"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Pescatarian</span>
                                <input
                                    type="checkbox"
                                    value="pescatarian"
                                    name="pescatarian"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Paleolithic</span>
                                <input
                                    type="checkbox"
                                    value="paleolithic"
                                    name="paleolithic"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Primal</span>
                                <input
                                    type="checkbox"
                                    value="primal"
                                    name="primal"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Fodmap Friendly</span>
                                <input
                                    type="checkbox"
                                    value="fodmap friendly"
                                    name="fodmap friendly"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

                            <div className="dietInput">
                                <span>Whole 30</span>
                                <input
                                    type="checkbox"
                                    value="whole 30"
                                    name="whole 30"
                                    className="checkboxInput"
                                    onChange={handleCheck}
                                />
                            </div>

               
                            </div>

                    </div>
                    <button type="submit">Create</button>
                    </div>
                </form>
                </div>
            </div>
            


        </div>
    )
}


// let regexName = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
// let regexScore =/^[1-9]?[0-9]{1}$|^100$/;
// let regexHealthScore = /^[1-9]?[0-9]{1}$|^100$/;
// let regexSummary =/^[A-Za-z0-9_-]+$/
// let regexSteps =/^[A-Za-z0-9_-]+$/