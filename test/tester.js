const convertStatus = (status)=>{
    let respone = ""
    if(status === "PENDING"){
        respone = "Đang chờ";  
    }else if(status === "IN_PROGRESS"){
        respone ="Đang xử lý"
    }else if(status === "SUCCESS"){
        respone ="Thành công"
    }else if(status === "FAILED"){
        respone = "Thất bại"
    }
    return respone
}

let rep = convertStatus("IN_PROGRESS")
console.log(rep);
