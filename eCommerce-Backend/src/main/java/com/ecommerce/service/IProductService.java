package com.ecommerce.service;

import com.ecommerce.DTO.ProductDTO;
import com.ecommerce.entity.Product;
import com.ecommerce.response.ProductResponse;

public interface IProductService {

    ProductDTO addProduct(Product product, Long categoryId);
    ProductDTO updateProduct (ProductDTO product, Long categoryId);
    ProductDTO deleteProduct (Long categoryId);
    public ProductResponse getAllProductC();
    ProductResponse getProductByCategory(Long categoryId);



}
