package com.ecommerce.controller;

import com.ecommerce.DTO.ProductDTO;
import com.ecommerce.entity.Product;
import com.ecommerce.response.ProductResponse;
import com.ecommerce.service.IProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    private IProductService productService;

    public ProductController(IProductService productService) {
        this.productService = productService;
    }


    @PostMapping("admin/categories/{categoryId}/product")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody Product prodcut, @PathVariable Long categoryId) {

        ProductDTO productDTO = productService.addProduct(prodcut, categoryId);

        return new ResponseEntity<>(productDTO, HttpStatus.CREATED);

    }

    @GetMapping("public/products")
    public ResponseEntity<ProductResponse> getAllProducts() {

        ProductResponse productResponse = productService.getAllProductC();

        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }

    @GetMapping("public/categories/{categoryid}/product")
    public ResponseEntity<ProductResponse> getAllProductsByCategory(@PathVariable Long categoryid) {
        ProductResponse productResponse = productService.getProductByCategory(categoryid);
        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }



}
