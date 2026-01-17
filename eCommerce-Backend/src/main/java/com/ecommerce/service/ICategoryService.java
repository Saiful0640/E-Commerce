package com.ecommerce.service;

import com.ecommerce.DTO.CategoryDTO;
import com.ecommerce.response.CategoryResponse;

public interface ICategoryService {

    CategoryDTO addCategory(CategoryDTO categoryDTO);

    String deleteCategory(Long categoryId);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long id);

    CategoryDTO getCategory(Long id);

    CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);
}
