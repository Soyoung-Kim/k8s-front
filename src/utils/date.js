export default {
    getDayOfWeek: date => {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        return week[new Date(date).getDay()];
    },

    getDayOfWeekForIndex: index => {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        return week[index];
    },

    //format : YYYY-MM-DD
    dateFormatDefault: date => {
        let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        return localDate.toISOString().substr(0, 10);
    },

    dateFormatKorea: date => {
        let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        const formatDate = localDate.toISOString();
        return `${formatDate.substring(0, 4)}년 ${parseInt(formatDate.substring(5, 7))}월 ${parseInt(formatDate.substring(8, 10))}일`;
    },
    dDayCounter: date => {
        const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        const correntDay = new Date().setHours(0, 0, 0, 0);
        const localDay = localDate.setHours(0, 0, 0, 0);
        const diffTime = localDay - correntDay;
        const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDay;
    },
    getStartEndDateThisWeek: date => {
        let startDate = new Date();
        let endDate = new Date();
        let localStartDate;
        let localEndDate;
        let todayNumber = new Date(date).getDay();

        switch (todayNumber) {
            case 0:
                startDate.setDate(startDate.getDate() - 6);
                endDate.setDate(endDate.getDate());
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 1:
                startDate.setDate(startDate.getDate());
                endDate.setDate(endDate.getDate() + 6);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 2:
                startDate.setDate(startDate.getDate() - 1);
                endDate.setDate(endDate.getDate() + 5);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 3:
                startDate.setDate(startDate.getDate() - 2);
                endDate.setDate(endDate.getDate() + 4);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 4:
                startDate.setDate(startDate.getDate() - 3);
                endDate.setDate(endDate.getDate() + 3);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 5:
                startDate.setDate(startDate.getDate() - 4);
                endDate.setDate(endDate.getDate() + 2);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };

            case 6:
                startDate.setDate(startDate.getDate() - 5);
                endDate.setDate(endDate.getDate() + 1);
                localStartDate = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000);
                localEndDate = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000);
                return {
                    startDate: localStartDate.toISOString().substring(0, 10),
                    endDate: localEndDate.toISOString().substring(0, 10),
                };
        }
    },

    timeFormatDefault: timeString => {
        if (timeString.length === 4) {
            let hour = timeString.substring(0, 2);
            let time = timeString.substring(2, 4);
            return `${hour}:${time}`;
        } else {
            return timeString;
        }
    },

    timeFormat12H: timeString => {
        if (timeString !== null && timeString.length === 4) {
            let hour = timeString.substring(0, 2);
            let minute = timeString.substring(2, 4);
            if (hour < 12) {
                hour = hour === '00' ? 12 : hour;
                return `오전 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            } else {
                hour = hour - (hour > 12 ? 12 : 0);
                return `오후 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            }
        } else if (timeString !== null && timeString.length === 5) {
            let hour = timeString.substring(0, 2);
            let minute = timeString.substring(3, 5);
            if (hour < 12) {
                hour = hour === '00' ? 12 : hour;
                return `오전 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            } else {
                hour = hour - (hour > 12 ? 12 : 0);
                return `오후 ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            }
        } else {
            return timeString;
        }
    },

    // format : yyyy-mm-dd(요일)
    dateFormatWithDay: date => {
        let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        const formatDate = localDate.toISOString();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        return `${formatDate.substring(0, 4)}-${formatDate.substring(5, 7)}-${formatDate.substring(8, 10)}(${week[date.getDay()]})`;
    },

    changeDateFromNoDash: strDate => {
        if (strDate.length === 8) {
            return new Date(strDate.substring(0, 4) + '-' + strDate.substring(4, 6) + '-' + strDate.substring(6, 8));
        }
    },

    toFullDateString: (dateString, timeString) => `${dateString.replace(/-/g, '')}${timeString.replace(':', '')}00`,

    dateFormatGetYear: dateString => `${dateString.substring(0, 4)} 년`,

    getStartEndDateThisYear: date => {
        let selectedYear;
        selectedYear = date.getFullYear();
        return {
            startDate: `${selectedYear}-01-01`,
            endDate: `${selectedYear}-12-31`,
        };
    },

    convertDateFormatKorea: dateString => {
        if (dateString.length === 8) {
            return `${dateString.substring(0, 4)}년 ${parseInt(dateString.substring(4, 6))}월 ${parseInt(dateString.substring(6, 8))}일`;
        } else {
            return `${dateString.substring(0, 4)}년 ${parseInt(dateString.substring(5, 7))}월 ${parseInt(dateString.substring(8, 10))}일`;
        }
    },

    convertDateFormatKoreaFull: dateString => {
        return `${dateString.substring(0, 4)}년 ${parseInt(dateString.substring(4, 6))}월 ${parseInt(dateString.substring(6, 8))}일 ${parseInt(dateString.substring(8, 10))}시 ${parseInt(
            dateString.substring(10, 12),
        )}분`;
    },

    convertDateFormatDefault: dateString => {
        if (dateString.length === 8) {
            return `${dateString.substring(0, 4)}-${dateString.substring(4, 6)}-${dateString.substring(6, 8)}`;
        } else {
            return dateString;
        }
    },
    addDays: (date, days) => {
        date.setDate(date.getDate() + days);
        return date;
    },
    addMonths: (date, months) => {
        date.setMonth(date.getMonth() + months);
        return date;
    },
    addYears: (date, years) => {
        date.setFullYear(date.getFullYear() + years);
        return date;
    },
    convertDateFormatDB: dateString => `${dateString.replace(/-/g, '')}`,

    convertAMPMFormatToKorea: dateString => {
        return dateString.replace('AM', '오전').replace('PM', '오후');
    },

    convertTimeFormatToDB: (meridiem, hour, minute) => {
        let hourConverted = 0;
        hourConverted = hour + (meridiem === '오전' ? 0 : 12);
        hourConverted = hourConverted - (hourConverted % 12 === 0 ? 12 : 0);

        return `${hourConverted.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    },
    convertDateFormatFromDB: dateString => {
        if (dateString.length === 8) {
            return `${dateString.substring(0, 4)}년 ${dateString.substring(4, 6)}월 ${dateString.substring(6, 8)}일`;
        } else {
            return dateString;
        }
    },
    getTodayYmdFormatDB: () => {
        let date = new Date();
        let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        let dateString = localDate.toISOString().substr(0, 10);
        return `${dateString.replace(/-/g, '')}`;
    },

    /* 운세에서 오늘 내일 날짜를 DB에 맞는 형태로 만들기 위해*/
    getToday() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ('0' + (1 + date.getMonth())).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);

        return year + month + day;
    },
    getTomorrow() {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        var year = date.getFullYear();
        var month = ('0' + (1 + date.getMonth())).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        return year + month + day;
    },
};
