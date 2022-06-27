const checkEmpty = (req,res,next) => {
    const {fullName, amount, price} = req.body;
    if (fullName && amount && price){
        next();
    }else{
        res.status(500).send("can't empty fullName, amount, price")
    }
}
const checkPrice = (req,res,next) => {
    const {price} = req.body;
    if (price >0 ){
        next();
    }
    else{
        res.status(500).send("Price must larger than zero");
    }
};

const checkAmount = (req,res,next) => {
    const {amount} = req.body;
    if (amount >0 ){
        next();
    }
    else{
        res.status(500).send("Amount must larger than zero");
    }
};

const checkSales = (req,res,next) =>{
    const {sale} = req.body;
    if (sale >=0 && sale <=100){
        next();
    }
    else{
        res.status(500).send("Sale must be between 0 and 100!");
    }
}

module.exports ={
    checkEmpty,checkSales,checkPrice,checkAmount,
};