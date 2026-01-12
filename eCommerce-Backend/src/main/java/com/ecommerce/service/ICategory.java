package com.ecommerce.service;

import com.ecommerce.DTO.CategoryDTO;
import com.ecommerce.Response.CategoryResponse;

public interface ICategory {

    CategoryDTO addCategory(CategoryDTO categoryDTO);

    String deleteCategory(Long category_id);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long id);

    CategoryDTO getCategory(Long id);

    CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);
}
