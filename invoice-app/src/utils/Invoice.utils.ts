export function checkStatus(status:string):boolean{
    const lowerCaseStatus = status.toLocaleLowerCase();
    return lowerCaseStatus === "ok" || 
           lowerCaseStatus === "done" || 
           lowerCaseStatus === "paid" ? true : false;
}

export function formatedDate(date:string):string{
    return new Date(date).toDateString()
}

export function formatDefaultDate() {
    const date = new Date().toLocaleDateString().split("/");
    return date[2] + "-" + date[1] + "-" + date[0];
  }