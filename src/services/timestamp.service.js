export const timestampConverterService = (dateString) => {
    const date = new Date(parseInt(dateString));
    if (isNaN(date.getTime())) {
        return { error: "Invalid Date" };
    }
    return {
        unix: date.getTime(),
        utc: date.toUTCString(),
    };  
};

export const timestampGeneratorService = () => {
    const date = new Date();
    return {
        unix: date.getTime(),
        utc: date.toUTCString(),
    };
};

