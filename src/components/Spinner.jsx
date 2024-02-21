import React from 'react'
import { Discuss } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div>
            <Discuss
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
            />
        </div>
    )
}

export default Spinner