
//For : Executes a block of code a number of times. 
// for (Definition (First value) ; Condition; new value after the code executed)

const arr = [0, 1, 2 ,3, 4, 5]
for(let l=0, r=arr.length-1; l<r; l++, r--){
    console.log(" l: ",l, " Array[l]-> ", arr[l], " || r: ", r, " Array[r]-> ", arr[r])
}