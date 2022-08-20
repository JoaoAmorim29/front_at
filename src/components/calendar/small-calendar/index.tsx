import React from "react";
import { useCalendar } from "../../../context/calendarContext";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface IDayProps {
    value: any;
    event: any;
    isCurrentDay: any;
    date: any;
}
interface IProps {
    days: IDayProps[]
}
const SmallCalendar: React.FC<IProps> = ({ days }) => {
    return (
        <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {days.map((day: any) => (
                <button
                    key={day.date}
                    type="button"
                    className={classNames(
                        'bg-gray-50',
                        (day.isSelected || day.isCurrentDay) && 'font-semibold',
                        day.isSelected && 'text-white',
                        !day.isSelected && day.isCurrentDay && 'text-indigo-600',
                        !day.isSelected && !day.isCurrentDay && 'text-gray-900',
                        !day.isSelected && !day.isCurrentDay && 'text-gray-500',
                        'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10'
                    )}
                >
                    <time
                        dateTime={day.date}
                        className={classNames(
                            day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full',
                            day.isSelected && day.isCurrentDay && 'bg-indigo-600',
                            day.isSelected && !day.isCurrentDay && 'bg-gray-900',
                            'ml-auto'
                        )}
                    >
                        {day.value}
                    </time>
                    {/* <p className="sr-only">{day.events.length} events</p>
                    {day.events.length > 0 && (
                        <div className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            {day.events.map((event: any) => (
                                <div key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                            ))}
                        </div>
                    )} */}
                </button>
            ))}
        </div>
    );
}

export { SmallCalendar }