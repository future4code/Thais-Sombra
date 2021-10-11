import { BaseError } from "../error/BaseError";

const Ranking = (results: any) => {
//  NÃO ESQUECER DE INVERTER S E M, M VEM PRIMEIRO
    if(results[0].unit==="s"){
        let athleteId: any = [];
        results.map((result:any)=>{
            athleteId.push(result.id);
        });

        const athleteIdFilter = [...new Set(athleteId)];
        
        let ranking:any = [];

        for (let i = 0; i <= athleteIdFilter.length-1; i++){
            ranking.push({
                id:athleteIdFilter[i], 
                name:"", 
                value:10000000});
        };

        for (let i = 0; i <= ranking.length-1; i++){
            results.map((result:any)=>{
                if(result.id === ranking[i].id){
                    console.log(result.value, ranking[i].id);
                    if(result.value < ranking[i].value){
                        ranking[i].value = result.value
                        ranking[i].name = result.name
                    };
                };
            });
        };

        ranking.sort((a: any, b: any): 1 | -1 | 0 => {
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });

        return ranking;

    } else if (results[0].unit === "m"){
        results.sort((a: any, b: any): 1 | -1 | 0 => {
                if (a.value > b.value) {
                    return 1;
                }
                if (a.value < b.value) {
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
        });

        return ranking;
        
    } else {
        throw new BaseError("Verifique os resultados cadastrados", 400);
    };

};

export default Ranking;