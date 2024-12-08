"use client"

export default function Dashboard() {
    return (
        <>
            <div className="h-screen w-screen bg-sky-900">
                <div>
                    TASK NAME
                </div>
                <div>
                    <TaskBar/>
                    <TaskBar/>
                    <TaskBar/>

                </div>
            </div>
        </>
    )
}

// SLNo Task Assigned start end time status action priority addSub delete

function TaskBar() {
    return (
        <>
            <div className=" bg-sky-800 w-3/4 h-[60px] m-2 p-1 flex justify-evenly ml-[100px] rounded-xl border">

                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">slno</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">task</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">assigned</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">start</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">end</div>

                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">time</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">status</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">action</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">priority</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">addsub</div>

                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">delete</div>
                <div className="bg-sky-900 m-1 p-1 border rounded-xl h-[40px] w-[100px] flex items-center justify-center">share</div>

            </div>
        </>
    )
}

function SearchBar() {}

function AddressBar() {}