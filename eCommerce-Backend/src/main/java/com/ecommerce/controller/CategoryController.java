package com.ecommerce.controller;

import com.ecommerce.Config.AppDataConstants;
import com.ecommerce.DTO.CategoryDTO;
import com.ecommerce.response.CategoryResponse;
import com.ecommerce.service.ICategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private ICategoryService iCategory;

    public CategoryController(ICategoryService iCategory) {
        this.iCategory = iCategory;
    }

    @PostMapping("/admin/category")
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO categoryDTO) {
        CategoryDTO savedCategoryDTO = iCategory.addCategory(categoryDTO);
        return new ResponseEntity<>(savedCategoryDTO, HttpStatus.CREATED);
    }

    @GetMapping("/public/categories")
    public ResponseEntity<CategoryResponse> getAllCategories(
            @RequestParam(name = "pageNumber", defaultValue = AppDataConstants.PAGE_NUMBER, required = false) Integer pageNumber,
            @RequestParam(name = "pageSize", defaultValue = AppDataConstants.PAGE_SIZE, required = false) Integer pageSize,
            @RequestParam(name = "sortBy", defaultValue = AppDataConstants.SORT_BY, required = false) String sortBy,
            @RequestParam(name = "sortOrder", defaultValue = AppDataConstants.SORT_DIR, required = false) String sortOrder) {
        CategoryResponse categoryResponse = iCategory.getAllCategories(pageNumber, pageSize, sortBy, sortOrder);
        return new ResponseEntity<>(categoryResponse, HttpStatus.OK);
    }

    @PutMapping("/admin/category/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO categoryDTO, @PathVariable Long id) {
        CategoryDTO updatedCategoryDTO = iCategory.updateCategory(categoryDTO, id);
        if (updatedCategoryDTO != null) {
            return new ResponseEntity<>(updatedCategoryDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/category/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        String status = iCategory.deleteCategory(id);
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @GetMapping("/public/category/{id}")
    public ResponseEntity<CategoryDTO> getCategory(@PathVariable Long id) {
        CategoryDTO categoryDTO = iCategory.getCategory(id);
        if (categoryDTO != null) {
            return new ResponseEntity<>(categoryDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
