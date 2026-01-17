package com.ecommerce.serviceImpl;

import com.ecommerce.DTO.ProductDTO;
import com.ecommerce.entity.Category;
import com.ecommerce.entity.Product;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CategoryRepo;
import com.ecommerce.repository.ProductRepo;
import com.ecommerce.response.ProductResponse;
import com.ecommerce.service.IProductService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdcutServiceImpl implements IProductService {

    private CategoryRepo categoryRepo;
    private ProductRepo productRepo;
    private ModelMapper modelMapper;

    public ProdcutServiceImpl(CategoryRepo categoryRepo, ProductRepo productRepo, ModelMapper modelMapper) {
        this.categoryRepo = categoryRepo;
        this.productRepo = productRepo;
        this.modelMapper = new ModelMapper();
    }

    @Override
    public ProductDTO addProduct(Product product, Long categoryId) {

        Category category = categoryRepo.findById(categoryId).orElseThrow(()-> new ResourceNotFoundException("Category","categoryId",categoryId));
        product.setProductImage("Default.png");
        product.setProductCategory(category);
        Double specialprice = product.getProductPrice();
        product.setProductSpecialPrice(specialprice);
        Product savedProduct = productRepo.save(product);
        return modelMapper.map(savedProduct, ProductDTO.class);
    }

    @Override
    public ProductDTO updateProduct(ProductDTO product, Long categoryId) {
        return null;
    }

    @Override
    public ProductDTO deleteProduct(Long categoryId) {
        return null;
    }

    @Override
    public ProductResponse getAllProductC() {

        List<Product> products = productRepo.findAll();
        List<ProductDTO> productDTOS = products.stream().map(product -> modelMapper.map(product, ProductDTO.class)).toList();

        ProductResponse productResponse = new ProductResponse();
        productResponse.setContent(productDTOS);
        return productResponse;
    }

    @Override
    public ProductResponse getProductByCategory(Long categoryId) {
        Category categorys = categoryRepo.findById(categoryId).orElseThrow(()-> new ResourceNotFoundException("Category","categoryId",categoryId));
        List<Product> product = productRepo.findByProductCategoryOrderByProductPriceAsc(categorys);
        List<ProductDTO> productDTOS = product.stream().map(products -> modelMapper.map(product, ProductDTO.class)).toList();

        ProductResponse productResponse = new ProductResponse();
        productResponse.setContent(productDTOS);
        return productResponse;

    }


}
