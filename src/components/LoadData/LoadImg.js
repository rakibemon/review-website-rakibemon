import { useEffect, useState } from "react"

// Load Image Data to display on about page
const useImgData = () => {
    const [courseImg, setCourseImg] = useState([])
    useEffect(() => {
        fetch('./imgdata.json')
            .then(res => res.json())
            .then(data => setCourseImg(data))
    }, [])
    return [courseImg, setCourseImg]
}
export default useImgData;