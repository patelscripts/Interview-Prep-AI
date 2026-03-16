import React, { useRef, useState } from 'react'
import {LuUser , LuUpload , LuTrash} from "react-icons/lu"

function ProfilePhotoselector({image , setImage ,preview , setPreview}) {
    const inputRef = useRef(null);
    const[previewUrl , setPreviewUrl] = useState(null);
    const handleImageChange = (event) =>{
        const file = event.target.files(0);

        if(file){

            //Update the image state
            setImage(file);

            // generate preview url from the file
            const preview = URL.createObjectURL(file);
            if(setPreview){
                setPreview(preview)
            }
            setPreviewUrl(preview);
        }
    }
  return (
    <div>
      <div>ProfilePhoto</div>
    </div>
  )
}

export default ProfilePhotoselector
