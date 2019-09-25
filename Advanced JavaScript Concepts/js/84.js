//Array.map() => to print '🗺'
Array.prototype.map = function() {
    // what happens with arrow function here?
    //  change the main behavior of the map to add '🗺'
    var arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + "🗺");
    }
    return arr;
};
console.log([1, 2, 3].map());

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
};

Date.prototype.yesterday = function() {
    var date = Object.assign(this);
    date.setDate(date.getDate() - 1);
    var formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return formatted_date;
};

new Date("1900-10-10").lastYear();
new Date("1915-10-15").yesterday();

// don't worry if you didn't get this... we will expand on this later.
