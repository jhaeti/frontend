import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
});

export default fetchAllProducts;
