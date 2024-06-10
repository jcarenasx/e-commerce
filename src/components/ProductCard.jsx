import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="h6">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/product/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
