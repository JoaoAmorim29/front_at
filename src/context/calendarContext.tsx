import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import dayjs from "dayjs";

interface CalendarContextData {
  monthIndex: number;
  handleSetMonthIndex: (index: number) => void;
  dateDisplay: string;
}


const CalendarContext = createContext<CalendarContextData>({} as CalendarContextData);

export const CalendarProvider: React.FC = ({ children }) => {
  const [dateDisplay, setDateDisplay] = useState('');
  const [monthIndex, setMonthIndex] = useState(dayjs().locale('pt-BR').month());

  const day = dayjs().day();
  const year = dayjs().year();

  useEffect(() => {
    setDateDisplay(`${dayjs(new Date(year, monthIndex)).toDate().toLocaleDateString('pt-br', { month: 'long' })} ${year}`.toLocaleUpperCase())
  }, [monthIndex])

  const handleSetMonthIndex = useCallback((index: number) => {
    setMonthIndex(index)
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        monthIndex,
        handleSetMonthIndex,
        dateDisplay
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar(): CalendarContextData {
  const context = useContext(CalendarContext);

  return context;
}