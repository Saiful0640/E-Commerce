package com.ecommerce.serviceImpl;

import com.ecommerce.DTO.CategoryDTO;
import com.ecommerce.Response.CategoryResponse;
import com.ecommerce.entity.Category;
import com.ecommerce.repository.CategoryRepo;
import com.ecommerce.service.ICategory;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements ICategory {

    private CategoryRepo categoryRepo;
    private ModelMapper modelMapper;

    public CategoryServiceImpl(CategoryRepo categoryRepo, ModelMapper modelMapper) {
        this.categoryRepo = categoryRepo;
        this.modelMapper = modelMapper;
    }

    @Override
    public CategoryDTO addCategory(CategoryDTO categoryDTO) {
        Category category = modelMapper.map(categoryDTO, Category.class);
        Category savedCategory = categoryRepo.save(category);
        return modelMapper.map(savedCategory, CategoryDTO.class);
    }

    @Override
    public String deleteCategory(Long category_id) {
        if (categoryRepo.existsById(category_id)) {
            categoryRepo.deleteById(category_id);
            return "Category deleted successfully with id: " + category_id;
        }
        return "Category not found with id: " + category_id;
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO categoryDTO, Long id) {
        if (categoryRepo.existsById(id)) {
            Category category = modelMapper.map(categoryDTO, Category.class);
            category.setCategory_id(id);
            Category updatedCategory = categoryRepo.save(category);
            return modelMapper.map(updatedCategory, CategoryDTO.class);
        }
        return null; // Or throw an exception
    }

    @Override
    public CategoryDTO getCategory(Long id) {
        Category category = categoryRepo.findById(id).orElse(null);
        if (category != null) {
            return modelMapper.map(category, CategoryDTO.class);
        }
        return null;
    }

    @Override
    public CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder) {
        Sort sort = sortOrder.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        Page<Category> categoryPage = categoryRepo.findAll(pageable);

        List<Category> categories = categoryPage.getContent();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(category -> modelMapper.map(category, CategoryDTO.class))
                .collect(Collectors.toList());

        CategoryResponse categoryResponse = new CategoryResponse();
        categoryResponse.setContent(categoryDTOS);
        categoryResponse.setPageNumber(categoryPage.getNumber());
        categoryResponse.setPageSize(categoryPage.getSize());
        categoryResponse.setTotalElements(categoryPage.getTotalElements());
        categoryResponse.setTotalPages(categoryPage.getTotalPages());
        categoryResponse.setLastPage(categoryPage.isLast());

        return categoryResponse;
    }
}
