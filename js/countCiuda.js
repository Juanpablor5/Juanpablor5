var categorias = [];
var temasCiu = [];

fetch("data/perguntasCuatrenios.json")
    .then(function (resp){
        return resp.json();
    })
        .then(function (data){
            if(data.length > 0){
                data.forEach((u) => { 
                    var categoria = u.Subcategoría;
                    var pregunta = u.Labels
                    categorias.push([pregunta,"1","1"])

                        
                    
                })
                console.log(categorias);
                let csvContent2 = "data:text/csv;charset=utf-8," 
                + categorias.map(e => e.join(";")).join("\n");

                //var encodedUri = encodeURI(csvContent2);
                //window.open(encodedUri);

            }
}
);

fetch("data/temas.json")
    .then(function (resp){
        return resp.json();
    })
        .then(function (data){
            if(data.length > 0){
                data.forEach((u) => { 

                    temasCiu.push(u.id)
                })
                console.log(temasCiu);


            }
}
);