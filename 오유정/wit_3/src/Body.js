function Body(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  if(month<10){
    month = "0"+ month;
  }
  let day = date.getDate();
  if(day<10){
    day = "0" + day;
  }
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  return <h2>{year}/{month}/{day} {hour}:{min}:{sec}</h2>
}
export default Body;