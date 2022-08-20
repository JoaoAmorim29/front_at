import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { useCalendar } from "../../context/calendarContext";
import { getMonth } from "../../utils/getMonth";
import { MonthView } from "./month-view";

interface IProps {
  view: any
}
const Calendar: React.FC<IProps> = ({ view }) => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useCalendar();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {view === 'month' && (
        <MonthView
          month={currenMonth}
        />
      )}
    </>
  )
}

export { Calendar }