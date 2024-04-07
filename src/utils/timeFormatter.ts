export const timeFormatter = (value: string) => {

    // Create a Date object from the original date string
    const date = new Date(value);

    // Extract hours and minutes from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours and minutes with leading zeros if necessary
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

    // Construct the desired format
    const formattedTime = formattedHours + ':' + formattedMinutes;

    return formattedTime;

}