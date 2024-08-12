import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('Workout Added Successfully', json)
        }


    }




    return (
        <form className="create" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label htmlFor="load">Load (in Kg)</label>
            <input
                id="load"
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label htmlFor="reps">Reps</label>
            <input
                id="reps"
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

        <button>Add Workout</button>
        { error && <div className="error">{ error }</div> }
        </form>
    )
}

export default WorkoutForm;