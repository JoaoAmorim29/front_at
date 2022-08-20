import React from 'react';

import { CalendarProvider } from './calendarContext';

const AppProvider: React.FC = ({ children }) => {
    return (
        <CalendarProvider>
            {children}
        </CalendarProvider>
    );
};

export default AppProvider;
