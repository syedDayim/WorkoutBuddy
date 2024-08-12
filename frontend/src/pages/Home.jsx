import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            console.log(response);

            if (response.ok) {
                const json = await response.json();
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, []);

    // Handle null state by returning an empty array if workouts is null
    const allWorkouts = workouts ? workouts.map((workout) => (
      <WorkoutDetails key={workout._id} workout={workout}/>
    )) : <p>Loading workouts...</p>;

    return (
      <div className="home">
        <div className="workouts">
          {allWorkouts}
        </div>
        <WorkoutForm />
      </div>
    );
}

export default Home;
