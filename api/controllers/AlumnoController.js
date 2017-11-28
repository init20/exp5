module.exports = {

	create:function (req,res) {
		Alumno.create(req.params.all(), function alumnoCreated(err, alumno) {
                  if (err) console.log(err);
                  res.redirect('/'); 
                });
		
	},
	mostrar:function(req,res){
		Alumno.find(function foundAlumno (err, alumnos) {
                if(err) console.log(err);
                return res.view('muestralumnos',{
                  alumnos: alumnos
                });
              });		
	},
	delete:function(req,res){
		var id = req.param('id');
		if (!id) return res.send("No id.",500);

		Alumno.find(id, function foundAlumno(err, alumno) {
			if (err) return res.send(err, 500);
			if (!alumno) return res.send("No existe alumno",404);

			Alumno.destroy(id, function alumnoDestroyed(err) {
				if (err) return res.send(err, 500);

				return res.redirect('/');
			});
			
		})
	},

	edit:function(req,res){
		var id = req.param('id');

		Alumno.find(id,function(err, alumno){
			if(err) return res.send(err);
			else {
				return res.view('editaralumno',{alumno:alumno});

			}

		}) 

	},

	update:function(req, res){
		var param = req.params.all();
		var id = param.id;
		Alumno.update(id, param, function(err, alumno){
			if(err) return res.send(err);
			else{

				return res.redirect('/');

			}

		});
	},
	aprobado:function(req, res){
		Alumno.find(function foundAlumno(err, alumnos){
			if(err) console.log(err);
			var aprobado;
			if(3<4){
				aprobado="NO";
			}
			else{
				aprobado="SI";
			}
			console.log(aprobado);
			return res.view('muestralumnos', {alumnos:aprobado});
	})}
};
