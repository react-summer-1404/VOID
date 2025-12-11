// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getMyData = createAsyncThunk('appCourse/getMyData', async params => {
  const response = await axios.get(
    "https://sepehracademy.liara.run/SharePanel/GetMyCourses",
    { 
      params: {
        PageNumber: 1, /// اینجا باگ داره 
        RowsOfPage: 1000,
        SortingCol: params?.sortingCol || 'DESC',
        SortType: "LastUpdate" ,
        Query: params?.q || '',
        ...params
      },
      
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTAxMzY4MTkyMSIsImlkIjo3OSwiaXNVc2UiOnRydWV9XSwiaWF0IjoxNzY0MTgxOTM0LCJleHAiOjE3NjQyMTc5MzR9.CP7ZHfNhpPVwoMBklbSvmbhjxDCNvnR98Jg_Ke3lFLs`
        }
      
    }
  )

  console.log(response.data.listOfMyCourses);

  return {
    params,
    data: response.data.listOfMyCourses || [],
    allData: response.data.listOfMyCourses || [],
    totalPages: response.data.listOfMyCourses || 0
  }
})

// export const deleteCourse = createAsyncThunk(
//   'appCourse/deleteCourse',
//   async (id, { dispatch, getState }) => {
    
//     await axios.delete(`https://sepehracademy.liara.run/Course/DeleteCourse/${id}`)
//     await dispatch(getMyData(getState().course.params))
//     return id
//   }
// )

export const appCourseSlice = createSlice({
  name: 'appCourse',
  initialState: {
    data: [],
    total: 0,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMyData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.allData = action.payload.allData
        state.total = action.payload.totalPages
        state.params = action.payload.params
      })
    //   .addCase(deleteCourse.fulfilled, (state, action) => {
        
    //   })
  }
})

export default appCourseSlice.reducer