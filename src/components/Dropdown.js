import React, {useState} from 'react'

export const Dropdown = (props) => {

const [selectedVideo, setSelectedVideo] = useState();


    return (
        <div>
            <select value={selectedVideo} onChange={e => setSelectedVideo(e.target.value)}>
            {props.options.map((item,index) => <option key={index}>{item}</option>)}
             </select>
             <p>{selectedVideo}</p>
        </div>
    )
}

export default Dropdown;