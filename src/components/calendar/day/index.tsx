import React, { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const Day = ({ day }: any) => {
    const [dayEvents, setDayEvents] = useState([]);

    const getCurrentMonthClass = () => {
        return day.format("MM-YY") === dayjs().format("MM-YY")
            ? "bg-white"
            : "bg-gray-200 text-gray-500";
    }

    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
            : "";
    }

    return (
        <div
            key={day.date}
            className={`${getCurrentMonthClass()} relative py-2 px-3`}
        >
            <time
                dateTime={day.date}
                className={`${getCurrentDayClass()}`}
            >
                {day.format("DD")}
            </time>
            {dayEvents.length > 0 && (
                <ol className="mt-2">
                    {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                </ol>
            )}
        </div>
    );
}

export { Day }