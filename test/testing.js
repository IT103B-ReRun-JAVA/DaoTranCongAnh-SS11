let num = [12,2,10,16,13]
num.sort((a, b) => a - b)
console.log(num);

function findingNumber(number_to_find){
    let total = 0
    let first_num = 0
    let last_num = 0
    for(let i = 0; i<num.length; i++){
        for(let j = num.length - 1; j>=0; j--){
            if(j > i){
                total = num[j] + num[i]
            }
            if(total === number_to_find){
                console.log(`${num[i]}, ${num[j]}`);
                return total
            }
        }
    }
    console.log("ko tìm thấy");
}

total = findingNumber(18)
console.log(`total : ${total}`);
