"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ProfilePage () {

    const [ isCollapsed, setIsCollapsed ] = useState( false )

    function sideBarSizeHandlerP() {
        setIsCollapsed( !isCollapsed )
    }


    return (
        <>
        <div className="flex  bg-sky-600 h-screen">
            <div>
            { isCollapsed ? 
                <ThinSidebar sideBarSizeHandler={ sideBarSizeHandlerP } /> :
                <WideSidebar sideBarSizeHandler={ sideBarSizeHandlerP } />
            }
            </div>
            <div>
                <Taskcard 
                    taskName="fake-api" percentageCompletion="78" date="01.01.2025" />
            </div>
        </div>
        </>
    )
}


function Taskcard({
    taskName,
    percentageCompletion,
    date
} : {
    taskName : string,
    percentageCompletion : string,
    date : string
}) {

    const router = useRouter()

    function onClickHandler() {
        router.push("/dashboard")
    }

    return (
     <>
        <div className="h-[250px] w-[250px] flex flex-col bg-slate-600 rounded-2xl m-10">
            <div className="h-2/3 w-full text-5xl bg-blue-300 p-5">
                { taskName }
            </div>
            <div className="h-1/3 w-full bg-slate-700 flex justify-between">
                <div> { percentageCompletion } </div>
                <div> { date } </div>
                <button
                    onClick={ onClickHandler }
                >Start</button>
            </div>
        </div>
    </>
    )
}

function WideSidebar( { sideBarSizeHandler} : {sideBarSizeHandler : () => void} ) {
    return (
        <>
            <div className="bg-sky-800 h-full w-[200px] p-2 mr-[80px]">
                <button
                    className="bg-sky-400 h-[85px] w-[170px] border border-gray-300 rounded-2xl p-2 m-2"
                >+</button>

                <button
                    className="bg-sky-500 h-[50px] w-[170px] rounded-2xl p-2 m-1"
                >HOME</button>

                <button
                    className="bg-sky-500 h-[50px] w-[170px] rounded-2xl p-2 m-1"
                >ABOUT</button>

                <button
                    className="bg-sky-500 h-[50px] w-[170px] rounded-2xl p-2 m-1"
                >DOCS</button>

                <button
                    onClick={ () => sideBarSizeHandler() }
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >X</button>

            </div>
        </>
    )
}

function ThinSidebar( { sideBarSizeHandler} : {sideBarSizeHandler : () => void} ) {
    return (
        <>
            <div className="bg-sky-800 h-full w-[80px] p-2 mr-[200px]">
                <button
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >+</button>

                <button
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >H</button>

                <button
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >A</button>

                <button
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >D</button>

                <button
                    onClick={ () => sideBarSizeHandler() }
                    className="bg-sky-600 h-[50px] w-[50px] rounded-full border border-gray-300 p-2 m-2"
                >O</button>

            </div>
        </>
    )
}

