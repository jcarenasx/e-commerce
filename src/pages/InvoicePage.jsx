import { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InvoicePage = () => {
    const [invoiceItems, setInvoiceItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedInvoiceItems = JSON.parse(localStorage.getItem('invoiceItems'));
        if (savedInvoiceItems) {
            setInvoiceItems(savedInvoiceItems);
        }
    }, []);

    const total = invoiceItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Invoice
            </Typography>
            <List>
                {invoiceItems.map((item, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={item.image}
                                alt={item.title}
                                sx={{ width: 100, height: 100 }}
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
                    </ListItem>
                ))}
            </List>
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6">
                    Total Purchase: ${total.toFixed(2)}
                </Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')} sx={{ marginTop: 2 }}>
                Back to Home
            </Button>
        </Container>
    );
};

export default InvoicePage;
