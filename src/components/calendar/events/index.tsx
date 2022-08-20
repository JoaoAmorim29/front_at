import React from "react";
import {
    ClockIcon,
} from '@heroicons/react/solid'

import { useCalendar } from "../../../context/calendarContext";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface IProps {
    selectedDay: any
}
const Events: React.FC<IProps> = ({ selectedDay }) => {
    return (
        <div className="py-10 px-4 sm:px-6 lg:hidden">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                {selectedDay.events.map((event: any) => (
                    <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                        <div className="flex-auto">
                            <p className="font-semibold text-gray-900">{event.name}</p>
                            <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                                <ClockIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                {event.time}
                            </time>
                        </div>
                        <a
                            href={event.href}
                            className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                        >
                            Edit<span className="sr-only">, {event.name}</span>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export { Events }