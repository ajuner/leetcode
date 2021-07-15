/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = []
    let len = nums.length
    for(let i = 0;i< 1<<len;i++) {
        let newArr = []
        for(let j=0;j<len;j++) {
            if(i & 1<<j) {
                newArr.push(nums[j])
            }
        }
        arr.push(newArr)
    }
    return arr
};