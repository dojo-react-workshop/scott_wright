function parsePromised(json){
    return new Promise((yes,no)=>{
        try {
            yes(JSON.parse(json))
        } catch(e){
            no(e)
        }
    })
}

parsePromised(process.argv[2]).catch(console.log)