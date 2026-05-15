#!/usr/bin/env python3
"""
This module provides a function to sum a list of floats with type annotations.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats as an argument and returns their sum as a float.

    Args:
        input_list (List[float]): A list containing floating-point numbers.

    Returns:
        float: The sum of the numbers in input_list.
    """
    return sum(input_list)
