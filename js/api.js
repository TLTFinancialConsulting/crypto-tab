window.Api = function() { };

Api.getBitcoinRatesForAll = function() {
    return {
        labels: ['Jan 2016', 'Feb 2016', 'Mar 2016', 'Apr 2016', 'May 2016', 'Jun 2016', 'Jul 2016', 'Aug 2016', 'Sep 2016', 'Oct 2016', 'Nov 2016', 'Dec 2016', 'Jan 2017', 'Feb 2017', 'Mar 2017', 'Apr 2017', 'May 2017', 'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', ],
        values: [1,31,18,32,26,81,54,41,75,80,49,40,31,18,32,26,81,54,41,75,80,49,40, 8]
    }
}

Api.getBitcoinRatesForOneYear = function() {
    return {
        labels: ['Jan 2017', 'Feb 2017', 'Mar 2017', 'Apr 2017', 'May 2017', 'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017'],
        values: [1,31,18,32,26,81,54,41,75,80,49,40]
    }
}

Api.getBitcoinRatesForOneMonth = function() {
    return {
        labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '10th', '11th', '12th', '13th'],
        values: [92,23,21,31,18,32,26,81,54,41,75,80]
    }
}

Api.getBitcoinRatesForOneWeek = function() {
    return {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        values: [85,74,47,1,65,32, 49]
    }
}

Api.getBitcoinRatesForOneDay = function() {
    return {
        labels: ['13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30'],
        values: [23, 85, 74, 47, 1, 65, 32]
    }
}

Api.getBitcoinRatesForOneHour = function() {
    return {
        labels: ['13:00', '13:15', '13:30', '13:45', '14:00'],
        values: [20, 82, 74, 27, 77]
    }
}