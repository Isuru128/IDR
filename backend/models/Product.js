import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
    },
    gemstoneType: {
      type: String,
      required: [true, 'Please specify the rare gemstone type'],
      trim: true,
    },
    caseMaterial: {
      type: String,
      default: 'Stainless Steel / Gold',
    },
    images: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
