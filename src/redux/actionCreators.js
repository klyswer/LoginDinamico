import Axios from "axios"
import { 
  GET_ALL_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_POST,
  GET_SPECIALITY,
  GET_COURS,
  GET_FRAGMENT
} from "./actions"


const API_URL = process.env.REACT_APP_URL_API

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  .then(
    response => {
      return dispatch({
        type: GET_ALL_POST,
        post: response.data
      })
    }
  )
}

export const getAllSpecialities = () => dispatch => {
  Axios.get(`${API_URL}/especialidades`)
  .then(
    response => {
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: response.data
      })
    }
  )
}

export const getAllCurses = () => dispatch => {
  Axios.get(`${API_URL}/cursos`)
  .then(
    response => {
      return dispatch({
        type: GET_ALL_COURSES,
        courses: response.data
      })
    }
  )
}

export const getAllTeachers = () => dispatch => {
  Axios.get(`${API_URL}/profesores`)
  .then(
    response => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: response.data
      })
    }
  )
}

export const getPost = (id) => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`)
  .then(
    response => {
      return dispatch({
        type: GET_POST,
        post: response.data
      })
    }
  )
}

export const getSpeciality = (id) => dispatch => {
  Axios.get(`${API_URL}/especialidades/${id}`)
  .then(
    response => {
      return dispatch({
        type: GET_SPECIALITY,
        speciality: response.data
      })
    }
  )
}

export const getCurse = (id) => dispatch => {
  Axios.get(`${API_URL}/cursos/${id}`)
  .then(
    response => {
      return dispatch({
        type: GET_COURS,
        course: response.data
      })
    }
  )
}

export const getFragment = (id) => dispatch => {
  Axios.get(`${API_URL}/clases/${id}`)
  .then(
    response => {
      return dispatch({
        type: GET_FRAGMENT,
        fragment: response.data
      })
    }
  )
}
