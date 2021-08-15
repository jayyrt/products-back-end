const createProduct = (req, res) => {
    const dbInstance = req.app.get('db');
    const { product_name, description, price, image_url } = req.body;

    dbInstance.create_product([ product_name, description, price, image_url ])
    .then( () => res.sendStatus(200) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
     } )

};

const getOne = (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.read_product( id )
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
    const { params, query } = req;

    dbInstance.update_product([ params.id, query.desc ])
    .then( () => res.sendStatus(200) )
    .catch( (e) => {
        res.status(500).sendStatus({errorMessage: "Oops! Something went wrong."});
        console.log(e)
    })
};

const deleteProduct = (req,res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product( id )
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