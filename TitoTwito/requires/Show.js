var fs = require ("fs");

var readme= function(){
	fs.exists ("./requires/BBDD.json", function(exists){
		if (exists){
			fs.readFile("./requires/BBDD.json", 'utf8', function(err, data){
				if (err){
					console.log("Error al readFile: ");
					console.log(err);
				}
				else {
					console.log(data);
				}
			})
		}
		else{
			console.log("No existe el fichero");
		}
	})
}
exports.readme = readme;
