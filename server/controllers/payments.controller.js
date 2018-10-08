const Payments = require('../models/payments'); // Acá puedo consultar a la BD porque en models está el modelo de datos

const paymentsCtrl = {};

// Acá se hacen las consultas a la base de datos
paymentsCtrl.getPayments = async (req, res) => {

    /* const { id } = req.params;
    const payments = await Payments.findById(id);
    res.json(payments); */

    const dataPayments = await Payments.find();
    res.json(dataPayments);

}

paymentsCtrl.searchById = async (req, res) => {
    // Para encontrar un id específico: 
    const dataPayments = await Payments.findById(req.params.id);
    res.json(dataPayments);
}

paymentsCtrl.postPayments = async (req, res) => {
    const dataPayments = new Payments(req.body);
    await dataPayments.save();
    res.json({
        status: 'Payments saved'
    });
}

paymentsCtrl.postPaymentsFilter = async (req, res) => {
    const dataPayments = await Payments.find(req.body);
    res.json(dataPayments);
}

paymentsCtrl.editPayments = async (req, res) => {
    const { id } = req.params; // Obtener el id desde req.params
    const dataPayments = {
        ...req.body
    };
    await Payments.findByIdAndUpdate(id, { $set: dataPayments }, { new: true }); // $set es para decirle qué datos quiero actualizar
    res.json({ status: 'Payments Updated' });
}

paymentsCtrl.deletePayments = async (req, res) => {
    await Payments.findByIdAndRemove(req.params.id);
    res.json({ status: 'Payments Deleted' });
};

module.exports = paymentsCtrl;
