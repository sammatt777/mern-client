import { createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:'http://localhost:4000/api'})

const ApiSlice = createApi({

    baseQuery,
    endpoints:(builder)=>({})

})

export default ApiSlice;
