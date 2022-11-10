export const dateDatabaseToUser = (date:Date):string => {
 
   console.log("date", date, typeof(date))
 
   const databaseDate: string[] = date.toISOString().split("T");
 
 
   const manipulatorArray = databaseDate[0].split("-")
   const inversionArray = [manipulatorArray[2], manipulatorArray[1], manipulatorArray[0]]
   const userArray = inversionArray.join("/")
 
   return userArray
 
 }