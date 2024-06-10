import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, TextField, Box, Snackbar, Alert } from '@mui/material';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                {product.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                <img src={product.image} alt={product.title} width="100%" />
            </Box>
            <Typography variant="body1" paragraph>
                {product.description}
            </Typography>
            <Typography variant="h6">
                ${product.price}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <TextField
                    type="number"
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    inputProps={{ min: 1 }}
                    sx={{ width: '100px', mr: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ height: '56px' }}>
                    Add to Cart
                </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Added to cart!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ProductPage;
