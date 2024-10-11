function firstNonRepeatedChar(str) {
	
 // Write your code here
	let hashmap = {}
    for(let i=0;i<str.length;i++)
    {
        if(str[i] in hashmap){
            hashmap[str[i]] +=1

        }else{
            hashmap[str[i]]= 1;
        }

    }
    console.log(hashmap);

    let flag = 0;
    let ans = Object.entries(hashmap).filter( (currItem) => {
        console.log(currItem)
        let key = currItem[0]
        let value = currItem[1];

        if(value==1){
            flag=1;
            return key;
            
        }



    });
    if(flag==1){
        return ans[0][0];

    }else{
        return null;
    }
    

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
