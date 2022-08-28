const Proyecto = require('../Models/proyecto.model');

module.exports.listar = (req, res) => {
    Proyecto.find()
        .then(resp => {
            res.json({
                datosProy: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al rescatar la información.'
            })
        });
}


module.exports.crear = (req, res) => {
    Proyecto.create(req.body)
        .then(resp => {
            res.json({
                datosProy: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al crear.'
            })
        });
}

module.exports.actualizar = (req, res) => {
    Proyecto.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
        .then(resp => {
            res.json({
                datosProy: req.datos,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al actualizar.'
            })
        });
}