import CreditModel from '../model/credit.model';
import UserModel from './../model/user.model';

//Crear
const addCredit = async (req, res) => {
    try {
        const body = req.body;
        const credit = new CreditModel(body);
        credit.save();
        return res.json({ status: true, dates: credit });
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
}
//mostrar
const getCredits = async (req, res) => {
    try {
        const data = await CreditModel.find({})
            .populate('CreditosAprobados.idUser')
            .populate('CreditosRechazados.idUser');
        console.log(data);
        return res.json({ status: true, items: data });
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
}

//mostrar por Id
const getCreditById = async (req, res) => {
    try {
        let paramas = req.params;
        const data = await CreditModel.findById(paramas.creditId)
            .populate('CreditosAprobados.idUser')
            .populate('CreditosRechazados.idUser');
        console.log(data);
        return res.json({ status: true, items: data });
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
}

//actualizar
const manageCredits = async (req, res) => {
    try {
        const body = req.body;
        const params = req.params;
        await CreditModel.findByIdAndUpdate(params.creditId, body);
        return res.json({ status: true })
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
}

const remove = async (req, res) => {
    try {
        const params = req.params;
        await CreditModel.findByIdAndDelete(params.creditId);
        return res.json({ status: true });
    } catch (err) {
        return res.json({ status: false, errors: err.message });
    }
};

// const solicitarCredito = async (req, res) => {
//     try {


//     } catch (e) {
//         return res.json({ status: false, errors: e.message });
//     }
// };

// const manageCuotas = async (req, res) => {
// }

export { addCredit, getCredits, manageCredits, getCreditById, remove };