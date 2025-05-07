import React, { useRef, useState } from 'react'

export default function UseRef() {

    const imageRef = useRef(null);


    const [firstImage, setFirstimage] = useState([])

    const handleClickChange = () => {
        if(imageRef.current){
            imageRef.current.src = firstImage
            ? "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=1024x1024&w=is&k=20&c=wgGafYAVLguIeeNPpU8z7K0ejO0JunU0oec2PtrPMzQ=" : "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png";
            setFirstimage(!firstImage)
        }
    }

  return (
    <div>
      <img ref={imageRef} style={{ width: "50%" }} src="https://media.istockphoto.com/id/92269080/photo/journey.jpg?s=1024x1024&w=is&k=20&c=-weed1C2UQUUDdh3cFpwvBHoo9n78CHCs2yGIm40x_E=" alt="" />
      <button onClick={handleClickChange}>Change</button>
    </div>
  )
}
