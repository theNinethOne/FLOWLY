export default function Taskcard({
    taskName,
    percentageCompletion,
    date
} : {
    taskName : string,
    percentageCompletion : string,
    date : string
}) {
    return (
     <>
        <div className="h-[250px] w-[250px] flex flex-col bg-slate-600 rounded-2xl">
            <div className="h-[170px] w-[250px] text-5xl bg-blue-300">
                { taskName }
            </div>
            <div className="h-[80px] w-[250px] bg-slate-700 flex justify-between">
                <div> { percentageCompletion } </div>
                <div> { date } </div>
            </div>
        </div>
    </>
    )
}