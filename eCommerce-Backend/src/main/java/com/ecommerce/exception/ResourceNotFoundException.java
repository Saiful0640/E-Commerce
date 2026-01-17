package com.ecommerce.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException() {}

    String resourceName;
    String field;
    Long fieldName;


    public ResourceNotFoundException(String resourceName, String field, Long fieldName) {

        super(String.format("Resource %s not found for field %s in %s", resourceName, field, fieldName));
        this.resourceName = resourceName;
        this.field = field;
        this.fieldName = fieldName;

    }
}
