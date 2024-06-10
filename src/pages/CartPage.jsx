import { useContext, useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, TextField, IconButton, ListItemAvatar, Avatar, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [removedItem, setRemovedItem] = useState(null);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        }
    };

    const handleRemove = (productId) => {
        const item = cart.find(i => i.id === productId);
        setRemovedItem(item);
        removeFromCart(productId);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCheckout = () => {
        localStorage.setItem('invoiceItems', JSON.stringify(cart));
        clearCart();
        navigate('/invoice');
    };

    const totalPurchase = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Shopping Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h6" component="p">
                    No products in the cart.
                </Typography>
            ) : (
                <>
                    <List>
                        {cart.map((item, index) => (
                            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        src={item.image}
                                        alt={item.title}
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                Price: ${item.price}
                                            </Typography>
                                            <br />
                                            <Typography component="span" variant="body2" color="text.primary">
                                                Quantity: {item.quantity}
                                            </Typography>
                                            <br />
                                            <Typography component="span" variant="body2" color="text.primary">
                                                Total: ${(item.price * item.quantity).toFixed(2)}
                                            </Typography>
                                        </>
                                    }
                                />
                                <TextField
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    inputProps={{ min: 1 }}
                                    sx={{ width: '60px', marginRight: '16px' }}
                                />
                                <IconButton onClick={() => handleRemove(item.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <Typography variant="h6">
                            Total Purchase: ${totalPurchase.toFixed(2)}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Box>
                </>
            )}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    {removedItem ? `${removedItem.title} removed from cart` : 'Item removed from cart'}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default CartPage;
