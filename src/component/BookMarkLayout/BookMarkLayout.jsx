import React from 'react'
import Map from '../Map/Map'
import { Outlet } from 'react-router-dom'
import { useBookMarks } from '../../Providers/BookMarkProvider'
function BookMarkLayout() {
const{bookmarks}=  useBookMarks()
  return (
    <div className="appLayout">
    <div className="sidebar">
      <Outlet />
    
    </div>
    <Map hotels={bookmarks}/>
  </div>
  )
}

export default BookMarkLayout