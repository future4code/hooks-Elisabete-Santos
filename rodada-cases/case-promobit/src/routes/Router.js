import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="movie/:id" element={<MovieDetailPage/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router