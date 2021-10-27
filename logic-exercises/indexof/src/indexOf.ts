const indexOf = (
    source: string,
    query: string,
): number | string | undefined => {
    if(source.length <= 0 ){
        return "informe uma palavra ou frase"
    };

    if(query.length <= 0 ){
        return "informe o caracter que será buscado"
    };

    for ( let i = 0; i <= source.length; i++ ){
        console.log(source[i])
    };

};

indexOf("Labenu","a");