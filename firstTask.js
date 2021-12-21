// input array of objects for groupBy method
const inputArr = [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" },
    { id: 6, universe: "bbc", name: "Peaky Blinders" }
]

// groupBy method - returns an object with arrays of objects by key
const groupBy = (arr, key) => {

    // check if the key is provided
    if (!key) {
        console.log("Error: \"key\" is not provided!")
    }
    // check if the array is provided
    if (!arr) {
        console.log("Error: \"arr\" is not provided!")
    }

    // сheck flag whether a key exists
    let matchFlag = true;

    // key check
    for(i in arr){
        if(!Object.keys(arr[i]).includes(key)){
            matchFlag = false
            break;
        }
    }

    // return empty object if the key is not exists
    if(!matchFlag){
        return {}
    }

    // get unique values by key from input array
    const uniqueItems = [...new Set(arr.map(item => item[`${key}`]))]

    // result object
    const result = {}

    // create an object with keys and empty arrays for values
    uniqueItems.map((item)=>{
        result[`${item}`] = []
    })

    // push objects from input array to arrays of result object by key
    arr.map((item)=>{
        for(i in result){
            if(i == item[`${key}`]){
                result[i].push(item)
            }
        }
    })

    // returns an object of arrays with objects according to the example in the task
    return result;
}

// call groupBy method with input array and key
console.log(groupBy(inputArr, 'universe'))
