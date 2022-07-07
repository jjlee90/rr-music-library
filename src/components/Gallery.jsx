import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import GalleryItem from "./GalleryItem"
// import {createResource as data} from '../helper/helper'

export default function Gallery() {
  const data = useContext(DataContext)
  // access data from context
  const display = data.result.read().map((item, index) => {
    return <GalleryItem item={item} key={index} />
  })

  return <div>{display}</div>
}
