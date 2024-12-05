import { MyParticles } from '../MyParticles'
import Navbar from '../Navbar'
import './ToDo.css'

import { useState } from 'react'
import ToDoItem from './ToDoItem'

export function ToDo() {
    const [items,setItems] = useState([])

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('None')
    const [notes, setNotes] = useState('')
    const [showNotes, setShowNotes] = useState(false)
    const [id, setId] = useState(1)
    const [activeNotes, setActiveNotes] = useState(null)

    function submitToDo(){
        if(title !== ''){
            console.log("Theres Stuff")
            setItems([...items,{title:title,category:category,notes:notes, id:id}]);
            setId(id+1);
            setTitle('')
            setCategory('None')
            setNotes('')
            setShowNotes(false)
        }
    }

    const handleClick = (id) => {
        console.log("CLICKED ME, ID: "+id)

        const temp = items.filter(item => item.id != id);
        setItems(temp)
    }

    const handleMouseEnter = (id) => {
        setActiveNotes(id)
    }

    const handleMouseLeave = () => {
        setActiveNotes(null)
    }

    return(
        <div className="App">
            <div className="App-header">
                <MyParticles/>
                <Navbar/>
                <div className='toDoContainer'>
                    <br/>
                    <strong style={{fontSize:'xx-large'}}>To Do</strong>
                    <br/><br/>
                        <div className='toDoInput'>
                            
                            <label for='title'>Title:</label>
                            <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='toDoTitleInput'/>

                            &nbsp;
                            <label for='category'>Category:</label>
                            <select name='category' id='category' onChange={(e) => setCategory(e.target.value)} value={category}>
                                <option value='None'>None</option>
                                <option value='Errand'>Errand</option>
                                <option value='Work'>Work</option>
                                <option value='School'>School</option>
                                <option value='Family'>Family</option>
                            </select>
                            <br/>

                            <label for='notes'>Any Notes:</label>
                            <input type='checkbox' className='toDoShowNotes' checked={showNotes} id='notes' onClick={(e) => setShowNotes(e.target.checked)}/>

                            <button onClick={submitToDo} className='toDoSubmit'>Click me</button>
                            <br/>
                            {(showNotes) && <div>
                                <label for='additionalNotes'>Additional Notes:</label><br/>
                                <textarea id='additionalNotes'  value={notes} onChange={(e) => setNotes(e.target.value)} cols={45} rows={3}/>
                            </div>}
                            
                        </div>
                    <br/><br/>
                    <div className='itemsList'>
                        {items.map((item) => (
                            <div onMouseEnter={() => {handleMouseEnter(item.id)}} onMouseLeave={() => {handleMouseLeave()}}>
                                <ToDoItem onClick={() => {handleClick(item.id)}} name={item.title} category={item.category} notes={item.notes} id={item.id}/>
                                <div className='toDoActiveNotes'>{(activeNotes == item.id) && item.notes}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ToDo
