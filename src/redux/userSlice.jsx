import ApiSlice from "./ApiSlice";




const userSlice = ApiSlice.injectEndpoints({

    endpoints:(builder)=>({

        postUser: builder.mutation({

            query:(data)=>({
                url:'/user',
                method:'POST',
                body:data
            })

        })

    })

});


export const {usePostUserMutation} = userSlice

export default userSlice;