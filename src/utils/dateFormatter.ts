export const dateFormatter = (value: string) => {
    const date = new Date(value);

    // Extract year, month, and day from the Date object
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();

    // Format month and day with leading zeros if necessary
    const formattedMonth = (month < 10 ? '0' : '') + month;
    const formattedDay = (day < 10 ? '0' : '') + day;

    // Construct the desired format
    const formattedDate = year + '-' + formattedMonth + '-' + formattedDay;

    return formattedDate
}