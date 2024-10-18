let count = 0

try{
    

function increment (){
    count = count + 1
    console.log(count)
    increment()
}

increment()
} catch(e){

    console.log(e)
    console.log(count)

}
