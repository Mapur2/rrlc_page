import React from 'react'

function Card2() {
    return (
        <div className=' w-64 bg-gray-50 rounded-lg flex flex-col align-middle justify-center p-2 m-1'>
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
            <p className=' my-6'><span className=' text-blue-700 bg-blue-100 w-24 text-center mx-4'>20%</span>
                <span className=' text-blue-700 bg-blue-100 w-16 text-center mx-4'>Limited</span></p>
            <p className=' font-bold text-center m-5'>WebBuilder1</p>
            <p>Computer  Modern clasic with wix support</p>
            <p>
                <span className=' text-2xl'>💲39.96</span>
                <span className=' text-gray-600 text-sm mx-2'>💲49.96</span>
                <span className=' text-red-600 text-sm mx-2'>(20% Off)</span>
            </p>
            <button className=' bg-blue-600 text-white text-center w-44 my-9 h-10 rounded-md'>View Deal</button>
        </div>
    )
}

export default Card2
