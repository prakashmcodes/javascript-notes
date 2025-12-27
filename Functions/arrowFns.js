const nums = [12,4,53,49,24,54,567,353,1346,74,]

const largestNum = (nums) => {
    let largest = -Infinity
    for(let i=0;i < nums.length;i++){
        if(nums[i]>largest) largest = nums[i]
    }
    return largest;
}

console.log(largestNum(nums));
