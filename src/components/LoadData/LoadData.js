import { useEffect, useState } from "react";

// Load courses data from database
const useData = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses, setCourses]
};
export default useData