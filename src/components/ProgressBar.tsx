import React from 'react'

function ProgressBar({ progress = 0, show = false }: { progress?: number, show: boolean }) {
    return (
        <div >

            {show ? <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress}%` }} > {progress}%</div>
            </div> : null}

        </div>
    )
}

export default ProgressBar