const Medicine = require('../models/medicine')

module.exports = {
     addMeMedicine(req, res){
        var mData = req.body;
        const medicine = new Medicine({
            _id: "M" + Date.now(),
                name: mData.name,
                ml: mData.ml,
                features: mData.features,
                brand: mData.brand,
                indication: mData.indication,
                price: mData.price,
                description: mData.description
        });

        medicine.save().then((result)=>{
            console.log("uploading products meta_data to MongoDB has successful.");
            console.log(result);
            res.json({ message: "Medicine upload Successfuly" })
            res.end();
        }).catch((error)=>{
            console.log("uploading products meta_data to MongoDB has Failed: error: " + error);
            res.json({ message: "Medicine upload Failed" })
            res.end();
        })

  }
}
