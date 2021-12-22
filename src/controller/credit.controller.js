import CreditModel from '../model/credit.model'

const addCredit = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const credit = new CreditModel(body);
        credit.save();
        return res.json({ status: true, dates: credit });
    } catch (e) {
        return res.json({ status: false, errors: e.message });
    }
}

const getCredits = async (req, res) =>{
    try{
        const data = await CreditModel.find({}).
        populate('idClient');
        console.log(data);
        return res.json({status: true, items: data});
    }catch(e){
        return res.json({status: false, errors: e.message});
    }
}

const getCreditById = async (req, res) =>{
    try{
        
        let paramas =req.params;
        const data = await CreditModel.findById(paramas.id).
        populate('idClient');
        console.log(data);
        return res.json({status: true, items: data});
    }catch(e){
        return res.json({status: false, errors: e.message});
    }
}


const manageCredits = async (req, res) =>{
    console.log(req.body);
    try{ 
        const body = req.body;
        const params = req.query;
        await CreditModel.findByIdAndUpdate(params.id, body);
        return res.json({status: true})
    }catch(e){
        return res.json({status: false, errors: e.message});
    }
}

const manageCuotas = async (req, res) =>{
}

export {addCredit, getCredits, manageCredits};