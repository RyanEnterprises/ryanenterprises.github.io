function calculateDaysBetweenDates(startDate, endDate) {
    const millisecondsPerDay = 86400 * 1000;
    const startDateInMs = startDate.getTime();
    const endDateInMs = endDate.getTime();
    const differenceInMs = endDateInMs - startDateInMs;
    const differenceInDays = Math.round(differenceInMs / millisecondsPerDay);
    return differenceInDays;
}