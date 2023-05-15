package com.ssafy.onu.repository;

import com.ssafy.onu.entity.Function;
import com.ssafy.onu.entity.InterestNutrient;
import com.ssafy.onu.entity.NutrientFunction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NutrientFunctionRepository extends JpaRepository<NutrientFunction, Integer> {
    List<NutrientFunction> findNutrientFuntionByFunction_FunctionId(int functionId);

    List<NutrientFunction> findNutrientFunctionByNutrient_NutrientId(long nutrientId);
}