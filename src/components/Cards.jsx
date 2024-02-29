import React from 'react'

function Cards(props) {
    return (
        <>
            <div className='my-8'>
                {props.choice ? <p className=' choice'>{props.choice}</p> : ""}
                <div className=' flex justify-between align-middle m-3'>
                    <p className=' num'>{props.num}</p><br />
                    <div className=' w-64 h-44 m-auto'>
                        <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
                        <p className=' text-center m-3 text-blue-500'>{props.name}</p>
                    </div>
                    <div className=' m-4'>
                        <p><span className=' font-bold'>{props.head}-</span>{props.intro}</p>
                        {props.discount ? <p className=' text-blue-700 bg-blue-100 w-16 text-center'>{props.discount} Off</p> : ""}
                        <h3 className=' font-bold'>Main Highlights</h3>
                        <p>{props.highlight}</p>
                        <a href="#" className=' text-blue-600'>Show More</a>
                    </div>
                    <div className=' m-4'>
                        <p className=' text-4xl bg-blue-100 text-center w-32 h-28 m-auto rate'>{props.rating}
                            <p className=' text-sm'>{props.ratingText}</p>
                            <p className=' text-sm'>⭐⭐⭐⭐⭐</p>
                        </p>
                        <button className=' bg-blue-600 text-white text-center w-44 my-9 h-10 rounded-md'>View</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
