const createProduct = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_product()
    .then( () => res.sendStatus(200) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
     } )

};

const getOne = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
    .then( product => res.status(200).send( product ) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
    })
};

const getAll = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
    .then( products => res.status(200).send( products ) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
    })
};

const updateProduct = (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product()
    .then( () => res.sendStatus(200) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
    })
};

const deleteProduct = (req,res) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
    .then( () => sendStatus(200) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
    })
};

module.exports = {
    createProduct,
    getOne,
    getAll,
    updateProduct,
    deleteProduct,
}