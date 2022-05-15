export const sameDay = (startDay : Date, endDay: Date ) => {
  return (
    startDay.getDate() === endDay.getDate()
    && startDay.getMonth() === endDay.getMonth()
    && startDay.getFullYear() === endDay.getFullYear()
  ) 
};

export const GetWeek = (date : Date) => {
  const week = [];
  let weekStartDate = new Date (date.getFullYear(), date.getMonth(), date.getDate());
  weekStartDate.setDate( weekStartDate.getDate() - ((weekStartDate.getDay() === 0) ? 7 : (weekStartDate.getDay())));  
  for ( let n = 0; n < 7 ; n++) {
    weekStartDate.setDate(weekStartDate.getDate() + 1);          
    week.push(
       new Date(weekStartDate.getTime()) 
    );
  }

  return week;
}

export const showDate = (date : Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${(day >= 10 ?  day : `0${day}`)}.${(month >= 9 ?  month+1 : `0${month+1}`)}.${year}`
} 

export const showTime = (date : Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${(hours >= 10 ?  hours : `0${hours}`)}:${(minutes >= 10 ?  minutes : `0${minutes}`)}`
}