function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let o = 0; o < nums.length; o++){
            if( i == o){
            }
            else{
                let tester = nums[i] + nums[o];
                if(tester == target){
                    return [i,o];
                }
            }
        }
    }
    return [];
};