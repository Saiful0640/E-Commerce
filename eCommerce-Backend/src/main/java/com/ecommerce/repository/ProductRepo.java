package com.ecommerce.repository;

import com.ecommerce.DTO.ProductDTO;
import com.ecommerce.entity.Category;
import com.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findByProductCategoryOrderByProductPriceAsc(Category categorys);
}
