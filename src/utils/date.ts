// scripts para extraer dias, meses, años




export function extractDate(date: string, split_character: string = "/") {
    // MONTH/YEAR
    if (date.split(split_character).length == 2) {
        const [month, year] = date.split(split_character);
        return {day: null, month: parseInt(month, 10), year: parseInt(year, 10)};
    }
    // DAY/MONTH/YEAR
    else if (date.split(split_character).length == 3) {
        const [day, month, year] = date.split(split_character);
        return {day: parseInt(day, 10), month: parseInt(month, 10), year: parseInt(year, 10)};
    }
    // NJT SUPPORTED
    else {
        throw new Error("Invalid date format. Expected format is 'DD/MM/YYYY' or 'MM/YYYY'.");
    }
}



export function DayNumberToString(day: number) {

    if (day < 1 || day > 7) {
        throw new Error("Invalid day number. It should be between 1 and 7.");
    }

    const daysEsAndEn = [
        { es: "Lunes", en: "Monday" },
        { es: "Martes", en: "Tuesday" },
        { es: "Miércoles", en: "Wednesday" },
        { es: "Jueves", en: "Thursday" },
        { es: "Viernes", en: "Friday" },
        { es: "Sábado", en: "Saturday" },
        { es: "Domingo", en: "Sunday" },
    ];

    return daysEsAndEn[day - 1];
}

export function MonthNumberToString(month: number) {

    if (month < 1 || month > 12) {
        throw new Error("Invalid month number. It should be between 1 and 12.");
    }

    const monthsEsAndEn = [
        { es: "Enero", en: "January" },
        { es: "Febrero", en: "February" },
        { es: "Marzo", en: "March" },
        { es: "Abril", en: "April" },
        { es: "Mayo", en: "May" },
        { es: "Junio", en: "June" },
        { es: "Julio", en: "July" },
        { es: "Agosto", en: "August" },
        { es: "Septiembre", en: "September" },
        { es: "Octubre", en: "October" },
        { es: "Noviembre", en: "November" },
        { es: "Diciembre", en: "December" },
    ];

    return monthsEsAndEn[month - 1];
}