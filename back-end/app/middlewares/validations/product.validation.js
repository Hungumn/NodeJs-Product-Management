const checkEmpty = (req,res,next) => {
    const {fullName, amount, price} = req.body;
    if (fullName && amount && price){
        next();
    }else{
        res.status(500).send("can't empty fullName, amount, price")
    }
}

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
    checkEmpty,checkSales
};