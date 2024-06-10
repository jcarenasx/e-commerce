import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Dashboard = () => {
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadMoreProducts();
    }, []);

    const loadMoreProducts = () => {
        const newProducts = products.slice(visibleProducts.length, visibleProducts.length + 10);
        setVisibleProducts([...visibleProducts, ...newProducts]);
        setPage(page + 1);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Our Store
            </Typography>
            <Typography variant="body1" paragraph>
                Discover our products below!
            </Typography>
            <Grid container spacing={4}>
                {visibleProducts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            {visibleProducts.length < products.length && (
                <Button
                    onClick={loadMoreProducts}
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 3, marginBottom: 3 }}
                >
                    Load More
                </Button>
            )}
        </Container>
    );
};

export default Dashboard;
