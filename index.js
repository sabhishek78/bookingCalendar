// Implement a BookingCalendar class to store your logs and calculate your earnings. The constructor of this class should take in your hourly rate. A new log can be added if adding the log will not cause a double booking.

// Your class will have following methods:

// book(startTime, endTime) : startTime and endTime are time in 24-hour format. A double booking happens when two logs have some non-empty intersection (ie., there is some time that is common to both logs.) For each call to the method BookingCalendar.book, return true if the log can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the log to the calendar.

// earnings() : should return total earnings by calculating hourly rate * total hours worked

// Example
// let bookings = new BookingCalendar(600);
// bookings.book('10:10', '11:20'); // returns true
// bookings.book('11:15', '12:25'); // returns false
// bookings.book('11:30', '12:30'); // returns true
// bookings.earnings() // should return 1300 because total hours worked is 2hr 10 mins.
class BookingCalendar{
   constructor(rate) {
        this.rate=rate;
        this.log=[];
    }
    book(startTime,endTime){
      let start=this.getAbsoluteTime(startTime);
      let end=this.getAbsoluteTime(endTime);
      if(this.log.length===0){
        this.log.push([start,end]);
        console.log(this.log);
        return true;
      }
      for(let i=0;i<this.log.length;i++){
        if(start>=this.log[i][1] && end>this.log[i][1]){
          this.log.splice(i+1,0,[start,end]);
          console.log(this.log);
          return true;
        } else if(start<this.log[i][0] && end<=this.log[i][0]){
           this.log.splice(i,0,[start,end]);
           console.log(this.log);
          return true;
        }
       }
       console.log(this.log);
       return false;
      
    }
    getAbsoluteTime(time){
      let timeArray=time.split(":");
      let absoluteTime=0;
       absoluteTime=parseInt(timeArray[0])*60+parseInt(timeArray[1]);
      return absoluteTime;
    }
    earnings(){
      let totalTime=0;
      for(let i=0;i<this.log.length;i++){
         totalTime+=this.log[i][1]-this.log[i][0];
      }
     return totalTime*10;
    }
}
let bookings = new BookingCalendar(600);
console.log(bookings.book('10:10', '11:20')); // returns true
console.log(bookings.book('11:15', '12:25'));
console.log(bookings.book('11:30', '12:30'));
console.log(bookings.log);
console.log(bookings.earnings());