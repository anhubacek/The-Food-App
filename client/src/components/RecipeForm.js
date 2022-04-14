import React, {useState, useEffect} from "react";
import './Home.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getTypes } from "../actions/actions";
import './RecipeForm.css'
import { useNavigate } from 'react-router-dom';


export default function RecipeForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {dispatch(getTypes())}, []);
    const types = useSelector(state => state.types)

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


    function handleCheck(d){
        console.log(input)
        if (d.target.checked){
            
            setInput({
                ...input,
                diets: [...input.diets, d.target.value]
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
            id:""
   
        })
        navigate('/home');
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
            id:""

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


                                <div className="input">
                                <label>Dish Type</label>
                                <input
                                    type="text"
                                    value={input.dishTypes}
                                    name="dishTypes"
                                    className="dishTypesInput"
                                    onChange={handleChange}
                                    placeholder="Breakfast, Dinner, Lunch, etc.."
                                />
                                </div>


                                </div>

                            <div className="diets">

                            <label>Diets</label>

                            { types?.map(e => (
                                 <div className="dietInput">
                                <span>{e.name}</span>
                                <input
                                    key={e.name}
                                    type="checkbox"
                                    value={e.name}
                                    name={e.name}
                                    className="checkboxInput"
                                    onChange={d => {handleCheck(d)}}
                                />
                            </div>
                                )
                            )}

               
                            </div>

                    </div>
                    <button type="submit" value="Submit" >Create</button>
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