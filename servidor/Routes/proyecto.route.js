const ProyectoController = require('../Controllers/proyectos.controller');

module.exports = (app) => {
    app.get('/api/v1/proyectos', ProyectoController.listar);
    app.post('/api/v1/proyectos', ProyectoController.crear);
    app.put('/api/v1/proyectos/:id', ProyectoController.actualizar);
}