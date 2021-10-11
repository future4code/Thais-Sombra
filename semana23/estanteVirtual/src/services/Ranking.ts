import { BaseError } from "../error/BaseError";

const Ranking = (results: any) => {

    if(results[0].unit==="m"){
        console.log(results[0].unit)
    } else if (results[0].unit === "s"){
        results.sort(function(a: any,b: any){
            if(a.value > b.value){
                return 1;
            }
            if (a.value < b.value){
                return -1;
            }
            return 0;
        });

        let ranking: any = [];
        results.map((result:any)=> {
            ranking.push({
                id:result.id, 
                name: result.name, 
                result:result.value})
        })

        return ranking;
    } else {
        throw new BaseError("Verifique os resultados cadastrados", 400);
    };

};

export default Ranking;