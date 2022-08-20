import React from "react";
import { Day } from '../day'
import { Events } from '../events'
import { SmallCalendar } from "../small-calendar";

interface IProps {
    month: any
}
const MonthView: React.FC<IProps> = ({ month }) => {

    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
                <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                    <div className="bg-white py-2">
                        D<span className="sr-only sm:not-sr-only">om</span>
                    </div>
                    <div className="bg-white py-2">
                        S<span className="sr-only sm:not-sr-only">eg</span>
                    </div>
                    <div className="bg-white py-2">
                        T<span className="sr-only sm:not-sr-only">er</span>
                    </div>
                    <div className="bg-white py-2">
                        Q<span className="sr-only sm:not-sr-only">ua</span>
                    </div>
                    <div className="bg-white py-2">
                        Q<span className="sr-only sm:not-sr-only">ui</span>
                    </div>
                    <div className="bg-white py-2">
                        S<span className="sr-only sm:not-sr-only">ex</span>
                    </div>
                    <div className="bg-white py-2">
                        S<span className="sr-only sm:not-sr-only">ab</span>
                    </div>
                </div>
                <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                    {/* Full Calendar */}
                    <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-8 lg:gap-px">
                        {month.map((row: any, i: any) => (
                            <React.Fragment key={i}>
                                {row.map((day: any, idx: any) => (
                                    <Day day={day} key={idx} rowIdx={i} />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* Small Calendar */}
                    {/* <SmallCalendar
                        days={days}
                    /> */}
                </div>
            </div>
            {/* Events */}
            {/* {selectedDay?.events.length > 0 && (
                < Events
                    selectedDay={selectedDay}
                />
            )} */}
        </div>
    );
}

export { MonthView }