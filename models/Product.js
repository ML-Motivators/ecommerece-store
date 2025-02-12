const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
    availableQty: {type: String, required: true},
    size:{type: String, required: true},
    color: {type: String, required: true},
},{timestamps: true});
// mongoose.models= {}
// export default mongoose.model('Product', ProductSchema);
export default mongoose.models.Product || mongoose.model('Product', ProductSchema);