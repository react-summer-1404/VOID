// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import course from "../pages/coursePages/store/index"
import CoursePreview2 from "../pages/coursePages/coursePreview2/store/index"
import courseData from "../pages/coursePages/coursePreview/store/index"
import appCourseReserve  from "../pages/coursePages/reservedList/store/index"
import myCourse from "../pages/coursePages/myCourseList/store/index"
import timeList from "../pages/coursePages/timeList/store/index"

import news from "../pages/newsPages/newsList/store/index"
import catNewsList from "../pages/newsPages/newsCatList/store/index"

// ** Redux Imports
import { combineReducers } from '@reduxjs/toolkit'

// ** Reducers Imports
import assistanceWork from "../pages/OstadYaran/store/index"
import CourseAssistance from "../pages/OstadYaran/store/index"
import departments from "../pages/Departments/store/index"
import buildings from "../pages/Buildings/store/index";
// ... your other reducers (e.g., course, user, etc.)


import authentication from "../pages/authentication/store/index"

const rootReducer = { 
  navbar, 
  layout, 
  course, 
  CoursePreview2, 
  courseData, 
  appCourseReserve, 
  myCourse, 
  news, 
  catNewsList, 
  timeList,
  authentication,
  assistanceWork,
  CourseAssistance,
  departments,
  buildings,
};

export default rootReducer;